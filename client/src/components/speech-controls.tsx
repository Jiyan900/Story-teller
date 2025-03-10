import { useState, useEffect } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

// Updated voice mapping with appropriate voices for each language
const voiceMap = {
  'en': 'US English Female',
  'hi': 'Hindi Female',
};

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: any) => void;
      cancel: () => void;
      isPlaying: () => boolean;
      voiceSupport: () => boolean;
      init: () => void;
    };
  }
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let checkAttempts = 0;
    const maxAttempts = 10;

    const checkVoiceReady = () => {
      console.log('Checking ResponsiveVoice availability...');

      if (typeof window.responsiveVoice !== 'undefined') {
        try {
          console.log('ResponsiveVoice object found, checking support...');
          const hasSupport = window.responsiveVoice.voiceSupport();
          console.log('Voice support:', hasSupport);

          window.responsiveVoice.init();
          console.log('ResponsiveVoice initialized successfully');
          setIsReady(true);
          return true;
        } catch (error) {
          console.error('ResponsiveVoice initialization error:', error);
        }
      } else {
        console.log('ResponsiveVoice not yet available');
      }
      return false;
    };

    const initInterval = setInterval(() => {
      checkAttempts++;
      console.log(`Initialization attempt ${checkAttempts}/${maxAttempts}`);

      if (checkVoiceReady() || checkAttempts >= maxAttempts) {
        clearInterval(initInterval);

        if (checkAttempts >= maxAttempts && !isReady) {
          console.error('Failed to initialize ResponsiveVoice after maximum attempts');
          toast({
            title: "Service Unavailable",
            description: "Text-to-speech service could not be initialized. Please refresh the page.",
            variant: "destructive",
          });
        }
      }
    }, 1000);

    return () => {
      clearInterval(initInterval);
      if (window.responsiveVoice && isPlaying) {
        window.responsiveVoice.cancel();
      }
    };
  }, [toast, isPlaying]);

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
      const voiceName = voiceMap[language as keyof typeof voiceMap];
      if (!voiceName) {
        throw new Error('Selected language not supported');
      }

      console.log('Starting speech with:', {
        language,
        voiceName,
        textLength: text.length,
        textPreview: text.substring(0, 100) + '...'
      });

      // Cancel any ongoing speech
      if (isPlaying) {
        window.responsiveVoice.cancel();
      }

      // Start new speech
      window.responsiveVoice.speak(text, voiceName, {
        pitch: 1,
        rate: 0.9,
        onstart: () => {
          console.log('Speech started:', { language, voiceName });
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
    if (window.responsiveVoice && isPlaying) {
      console.log('Stopping speech');
      window.responsiveVoice.cancel();
      setIsPlaying(false);
    }
  };

  if (!isReady) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          <span>Initializing text-to-speech...</span>
        </div>
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