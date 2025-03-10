import { useState, useEffect } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

const voiceMap = {
  'en': 'UK English Female',
  'hi': 'Hindi Female'
};

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: any) => void;
      cancel: () => void;
      isPlaying: () => boolean;
      voiceSupport: () => boolean;
      init: () => void;
      getVoices: () => string[];
    };
  }
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkVoiceReady = () => {
      if (!window.responsiveVoice) {
        console.log('ResponsiveVoice not loaded yet');
        return false;
      }

      try {
        window.responsiveVoice.init();
        const hasSupport = window.responsiveVoice.voiceSupport();
        console.log('Voice support:', hasSupport);

        // Test if the required voice is available
        const voices = window.responsiveVoice.getVoices();
        const requiredVoice = voiceMap[language as keyof typeof voiceMap];
        const voiceAvailable = voices.includes(requiredVoice);
        console.log(`Voice ${requiredVoice} available:`, voiceAvailable);

        if (hasSupport && voiceAvailable) {
          setIsReady(true);
          return true;
        }
      } catch (error) {
        console.error('ResponsiveVoice initialization error:', error);
      }
      return false;
    };

    // Check every second for 10 seconds
    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
      attempts++;
      console.log(`Checking ResponsiveVoice (attempt ${attempts}/${maxAttempts})`);

      if (checkVoiceReady() || attempts >= maxAttempts) {
        clearInterval(interval);
        if (attempts >= maxAttempts && !isReady) {
          toast({
            title: "Text-to-Speech Unavailable",
            description: "Could not initialize speech service. Please refresh the page.",
            variant: "destructive",
          });
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      if (isPlaying) {
        window.responsiveVoice?.cancel();
      }
    };
  }, [language, isPlaying, toast]);

  const speak = () => {
    if (!window.responsiveVoice || !isReady) {
      toast({
        title: "Service Not Ready",
        description: "Please wait while the text-to-speech service initializes.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Cancel any ongoing speech
      if (isPlaying) {
        window.responsiveVoice.cancel();
      }

      const voiceName = voiceMap[language as keyof typeof voiceMap];
      if (!voiceName) {
        throw new Error(`Language ${language} not supported`);
      }

      console.log('Starting speech:', {
        voice: voiceName,
        textLength: text.length,
        preview: text.substring(0, 50) + '...'
      });

      window.responsiveVoice.speak(text, voiceName, {
        pitch: 1,
        rate: 0.9,
        onstart: () => {
          console.log('Speech started');
          setIsPlaying(true);
        },
        onend: () => {
          console.log('Speech completed');
          setIsPlaying(false);
        },
        onerror: (error: any) => {
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
    if (isPlaying && window.responsiveVoice) {
      window.responsiveVoice.cancel();
      setIsPlaying(false);
    }
  };

  if (!isReady) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        <span>Initializing text-to-speech...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 my-4">
      {!isPlaying ? (
        <Button
          onClick={speak}
          variant="outline"
          size="icon"
          className="w-10 h-10"
        >
          <Play className="h-5 w-5" />
        </Button>
      ) : (
        <Button
          onClick={stop}
          variant="outline"
          size="icon"
          className="w-10 h-10"
        >
          <Pause className="h-5 w-5" />
        </Button>
      )}
      <Button
        onClick={stop}
        variant="outline"
        size="icon"
        className="w-10 h-10"
        disabled={!isPlaying}
      >
        <StopCircle className="h-5 w-5" />
      </Button>
    </div>
  );
}