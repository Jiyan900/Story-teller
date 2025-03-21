import { useState } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

const voiceMap = {
  'en': 'US English Female',
  'hi': 'Hindi Female'
} as const;

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: any) => void;
      pause: () => void;
      resume: () => void;
      cancel: () => void;
      isPlaying: () => boolean;
      getPosition: () => number;
    };
  }
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { toast } = useToast();

  const speak = () => {
    try {
      if (typeof window === 'undefined' || !window.responsiveVoice) {
        throw new Error('ResponsiveVoice not available');
      }

      const voiceName = voiceMap[language as keyof typeof voiceMap];
      if (!voiceName) {
        throw new Error(`Language ${language} not supported`);
      }

      if (isPaused) {
        try {
          window.responsiveVoice.resume();
          setIsPaused(false);
          setIsPlaying(true);
        } catch (error) {
          console.error('Resume error:', error);
          // If resume fails, restart from beginning
          startNewSpeech();
        }
        return;
      }

      startNewSpeech();
    } catch (error) {
      console.error('Speech error:', error);
      toast({
        title: "Speech Error",
        description: "Failed to start speech. Please try again.",
        variant: "destructive",
      });
    }
  };

  const startNewSpeech = () => {
    // Cancel any ongoing speech
    if (isPlaying) {
      window.responsiveVoice.cancel();
    }

    const voiceName = voiceMap[language as keyof typeof voiceMap];
    window.responsiveVoice.speak(text, voiceName, {
      onstart: () => {
        setIsPlaying(true);
        setIsPaused(false);
      },
      onend: () => {
        setIsPlaying(false);
        setIsPaused(false);
      },
      onerror: (error: unknown) => {
        console.error('Speech error:', error);
        setIsPlaying(false);
        setIsPaused(false);
        toast({
          title: "Speech Error",
          description: "Failed to play speech. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  const pause = () => {
    if (isPlaying && !isPaused) {
      try {
        window.responsiveVoice.pause();
        setIsPaused(true);
        setIsPlaying(false);
      } catch (error) {
        console.error('Pause error:', error);
        // If pause fails, stop completely
        stop();
      }
    }
  };

  const stop = () => {
    if (isPlaying || isPaused) {
      window.responsiveVoice.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  return (
    <div className="flex items-center gap-2 my-4">
      <Button
        onClick={isPaused ? speak : (isPlaying ? pause : speak)}
        variant="outline"
        size="icon"
        className="w-10 h-10"
      >
        {isPaused ? (
          <Play className="h-5 w-5" />
        ) : isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </Button>
      {(isPlaying || isPaused) && (
        <Button
          onClick={stop}
          variant="outline"
          size="icon"
          className="w-10 h-10"
        >
          <StopCircle className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}