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
};

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'as', name: 'Assamese' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
];

export function SpeechControls({ text }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const { toast } = useToast();

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      toast({
        title: "Not Supported",
        description: "Text-to-speech is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    // Function to load and set available voices
    function loadVoices() {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        // Select the first voice for the current language
        const languageVoice = availableVoices.find(voice => voice.lang.startsWith(selectedLanguage));
        if (languageVoice) {
          setSelectedVoice(languageVoice.name);
        }
      }
    }

    // Load voices immediately in case they're already available
    loadVoices();

    // Also handle the voiceschanged event for browsers that load voices asynchronously
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Cleanup
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedLanguage, toast]);

  const speak = () => {
    if (!window.speechSynthesis) return;

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find(v => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => {
        setIsPlaying(false);
        toast({
          title: "Error",
          description: "Failed to play speech. Please try again.",
          variant: "destructive",
        });
      };

      window.speechSynthesis.cancel(); // Stop any ongoing speech
      window.speechSynthesis.speak(utterance);
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

  const pause = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const filteredVoices = voices.filter(voice => voice.lang.startsWith(selectedLanguage));

  if (!window.speechSynthesis) {
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
            onClick={pause}
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
          onValueChange={(value) => {
            setSelectedLanguage(value);
            setSelectedVoice(''); // Reset voice when language changes
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem 
                key={lang.code} 
                value={lang.code}
                disabled={!voices.some(voice => voice.lang.startsWith(lang.code))}
              >
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Volume2 className="h-5 w-5 text-muted-foreground" />
        <Select
          value={selectedVoice}
          onValueChange={setSelectedVoice}
          disabled={filteredVoices.length === 0}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a voice" />
          </SelectTrigger>
          <SelectContent>
            {filteredVoices.map((voice) => (
              <SelectItem key={voice.name} value={voice.name}>
                {voice.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}