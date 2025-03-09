import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Tts from '@react-native-community/tts';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initTts = async () => {
      try {
        await Tts.setDefaultLanguage(language === 'as' ? 'as-IN' : language === 'hi' ? 'hi-IN' : 'en-US');
        const voices = await Tts.voices();
        console.log('Available voices:', voices);
        setIsReady(true);
      } catch (error) {
        console.error('TTS initialization error:', error);
      }
    };

    initTts();

    return () => {
      Tts.stop();
    };
  }, [language]);

  const speak = async () => {
    try {
      if (!isReady) return;

      setIsPlaying(true);
      await Tts.speak(text, {
        language: language === 'as' ? 'as-IN' : language === 'hi' ? 'hi-IN' : 'en-US',
        pitch: 1,
        rate: 0.8,
        onDone: () => setIsPlaying(false),
        onError: (error) => {
          console.error('TTS error:', error);
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.error('Speech error:', error);
      setIsPlaying(false);
    }
  };

  const stop = () => {
    Tts.stop();
    setIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={isPlaying ? stop : speak}
        style={styles.button}
      >
        <Icon 
          name={isPlaying ? "stop" : "play-arrow"} 
          size={24} 
          color="#7c3aed"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#7c3aed',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
