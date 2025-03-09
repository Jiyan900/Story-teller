import { useState, useEffect } from 'react';
import { Play, Pause, StopCircle, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface SpeechControlsProps {
  text: string;
}

type Language = {
  code: string;
  name: string;
  voiceName: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', voiceName: 'UK English Female' },
  { code: 'hi', name: 'Hindi', voiceName: 'Hindi Female' },
  { code: 'as', name: 'Assamese', voiceName: 'Bangla Bangladeshi Female' }, // Using Bengali as closest to Assamese
  { code: 'es', name: 'Spanish', voiceName: 'Spanish Female' },
  { code: 'fr', name: 'French', voiceName: 'French Female' },
  { code: 'de', name: 'German', voiceName: 'Deutsch Female' },
  { code: 'it', name: 'Italian', voiceName: 'Italian Female' },
  { code: 'pt', name: 'Portuguese', voiceName: 'Portuguese Female' },
  { code: 'ru', name: 'Russian', voiceName: 'Russian Female' },
  { code: 'zh', name: 'Chinese', voiceName: 'Chinese Female' },
  { code: 'ja', name: 'Japanese', voiceName: 'Japanese Female' },
  { code: 'ko', name: 'Korean', voiceName: 'Korean Female' },
];

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

export function SpeechControls({ text }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const { toast } = useToast();

  useEffect(() => {
    // Check if ResponsiveVoice is loaded and initialized
    const checkVoiceSupport = () => {
      console.log('Checking ResponsiveVoice support...');
      console.log('ResponsiveVoice object:', window.responsiveVoice);

      if (!window.responsiveVoice) {
        console.error('ResponsiveVoice not loaded');
        toast({
          title: "Speech Not Available",
          description: "Text-to-speech is initializing. Please try again in a moment.",
          variant: "destructive",
        });
        return false;
      }

      try {
        // Try to initialize if not already done
        if (typeof window.responsiveVoice.init === 'function') {
          window.responsiveVoice.init();
        }
        return true;
      } catch (error) {
        console.error('Error initializing ResponsiveVoice:', error);
        return false;
      }
    };

    const initInterval = setInterval(() => {
      if (checkVoiceSupport()) {
        clearInterval(initInterval);
      }
    }, 1000);

    return () => {
      clearInterval(initInterval);
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
      }
    };
  }, [toast]);

  const speak = () => {
    try {
      if (!window.responsiveVoice) {
        throw new Error('ResponsiveVoice not loaded');
      }

      const language = languages.find(lang => lang.code === selectedLanguage);
      if (!language) {
        throw new Error('Language not found');
      }

      console.log('Starting speech:', {
        language: language.name,
        voice: language.voiceName,
        textLength: text.length
      });

      // Cancel any ongoing speech
      window.responsiveVoice.cancel();

      // Start new speech
      window.responsiveVoice.speak(text, language.voiceName, {
        onend: () => {
          console.log('Speech ended');
          setIsPlaying(false);
        },
        onerror: (error: any) => {
          console.error('Speech error:', error);
          setIsPlaying(false);
          toast({
            title: "Error",
            description: "Failed to play speech. Please try again.",
            variant: "destructive",
          });
        },
        onstart: () => {
          console.log('Speech started');
          setIsPlaying(true);
        }
      });
    } catch (error) {
      console.error('Speech synthesis error:', error);
      toast({
        title: "Error",
        description: "Failed to start speech. Please try again in a moment.",
        variant: "destructive",
      });
    }
  };

  const stop = () => {
    if (window.responsiveVoice) {
      console.log('Stopping speech');
      window.responsiveVoice.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 my-4">
      <div className="flex items-center gap-2">
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

      <div className="flex items-center gap-2">
        <Globe2 className="h-5 w-5 text-muted-foreground" />
        <div className="min-w-[140px]">
          <Select
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem 
                  key={lang.code} 
                  value={lang.code}
                  className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                >
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}