import { useState, useEffect } from 'react';
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
};

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: any) => void;
      cancel: () => void;
      isPlaying: () => boolean;
    };
  }
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const speak = () => {
    try {
      const voiceName = voiceMap[language as keyof typeof voiceMap];
      if (!voiceName) {
        throw new Error(`Language ${language} not supported`);
      }

      // Cancel any ongoing speech
      if (isPlaying) {
        window.responsiveVoice.cancel();
      }

      window.responsiveVoice.speak(text, voiceName, {
        onstart: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
        onerror: (error) => {
          console.error('Speech error:', error);
          setIsPlaying(false);
          toast({
            title: "Speech Error",
            description: "Failed to play speech. Please try again.",
            variant: "destructive",
          });
        }
      });
    } catch (error) {
      console.error('Speech error:', error);
      toast({
        title: "Speech Error",
        description: "Failed to start speech. Please try again.",
        variant: "destructive",
      });
    }
  };

  const stop = () => {
    if (isPlaying) {
      window.responsiveVoice.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-2 my-4">
      <Button
        onClick={isPlaying ? stop : speak}
        variant="outline"
        size="icon"
        className="w-10 h-10"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      {isPlaying && (
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