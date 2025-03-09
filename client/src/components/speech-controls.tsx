import { useState, useEffect } from 'react';
import { Play, Pause, StopCircle, Volume2, Globe2 } from 'lucide-react';
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
    };
  }
}

export function SpeechControls({ text }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const { toast } = useToast();

  useEffect(() => {
    // Load ResponsiveVoice script
    const script = document.createElement('script');
    script.src = 'https://code.responsivevoice.org/responsivevoice.js?key=YOUR_FREE_KEY';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.responsiveVoice?.voiceSupport()) {
        toast({
          title: "Not Supported",
          description: "Text-to-speech is not supported in your browser.",
          variant: "destructive",
        });
      }
    };

    return () => {
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
      }
      document.body.removeChild(script);
    };
  }, [toast]);

  const speak = () => {
    if (!window.responsiveVoice) return;

    try {
      const language = languages.find(lang => lang.code === selectedLanguage);
      if (!language) return;

      window.responsiveVoice.speak(text, language.voiceName, {
        onend: () => setIsPlaying(false),
        onerror: () => {
          setIsPlaying(false);
          toast({
            title: "Error",
            description: "Failed to play speech. Please try again.",
            variant: "destructive",
          });
        },
      });
      setIsPlaying(true);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      toast({
        title: "Error",
        description: "Your browser doesn't support text-to-speech.",
        variant: "destructive",
      });
    }
  };

  const stop = () => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel();
      setIsPlaying(false);
    }
  };

  if (!window.responsiveVoice?.voiceSupport()) {
    return null;
  }

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
        <Select
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem 
                key={lang.code} 
                value={lang.code}
              >
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}