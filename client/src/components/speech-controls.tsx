import { useState, useEffect } from 'react';
import { Play, Pause, StopCircle, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface SpeechControlsProps {
  text: string;
}

export function SpeechControls({ text }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    // Load available voices
    function loadVoices() {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        // Select the first English voice as default
        const englishVoice = availableVoices.find(voice => voice.lang.startsWith('en'));
        if (englishVoice) {
          setSelectedVoice(englishVoice.name);
        }
      }
    }

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find(v => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
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
    window.speechSynthesis.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-4 my-4">
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
        <Volume2 className="h-5 w-5 text-muted-foreground" />
        <Select
          value={selectedVoice}
          onValueChange={setSelectedVoice}
          disabled={voices.length === 0}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a voice" />
          </SelectTrigger>
          <SelectContent>
            {voices.map((voice) => (
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