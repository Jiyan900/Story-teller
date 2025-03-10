import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initSpeech = async () => {
      try {
        // Use ResponsiveVoice for web
        if (Platform.OS === 'web') {
          if (typeof window !== 'undefined' && window.responsiveVoice) {
            console.log('Checking ResponsiveVoice availability...');
            if (!window.responsiveVoice.voiceSupport()) {
              console.log('RV: Voice synthesis not supported');
              console.log('RV: Enabling fallback mode');
            }
            if (isMounted) {
              setIsReady(true);
              console.log('ResponsiveVoice initialized successfully');
            }
          }
        } else {
          // Use React Native TTS for mobile
          const Tts = require('@react-native-community/tts').default;
          await Tts.setDefaultLanguage(language === 'hi' ? 'hi-IN' : 'en-US');
          const voices = await Tts.voices();
          console.log('Available voices:', voices);
          if (isMounted) {
            setIsReady(true);
          }
        }
      } catch (error) {
        console.error('Speech initialization error:', error);
        if (isMounted) {
          setIsReady(false);
        }
      }
    };

    initSpeech();

    return () => {
      isMounted = false;
      if (Platform.OS !== 'web') {
        const Tts = require('@react-native-community/tts').default;
        Tts.stop();
      }
    };
  }, [language]);

  const speak = async () => {
    try {
      if (!isReady) return;

      setIsPlaying(true);
      console.log('Selected text', text);

      if (Platform.OS === 'web') {
        // Web: Use ResponsiveVoice
        if (window.responsiveVoice) {
          window.responsiveVoice.speak(text, 
            language === 'hi' ? 'Hindi Female' : 'UK English Female',
            {
              pitch: 1,
              rate: 0.9,
              onend: () => setIsPlaying(false),
              onerror: (error) => {
                console.error('Speech error:', error);
                setIsPlaying(false);
              }
            }
          );
        }
      } else {
        // Mobile: Use React Native TTS
        const Tts = require('@react-native-community/tts').default;
        await Tts.speak(text, {
          language: language === 'hi' ? 'hi-IN' : 'en-US',
          pitch: 1,
          rate: 0.8,
          onDone: () => setIsPlaying(false),
          onError: (error) => {
            console.error('TTS error:', error);
            setIsPlaying(false);
          }
        });
      }
    } catch (error) {
      console.error('Speech error:', error);
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (Platform.OS === 'web') {
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
      }
    } else {
      const Tts = require('@react-native-community/tts').default;
      Tts.stop();
    }
    setIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={isPlaying ? stop : speak}
        style={styles.button}
        disabled={!isReady}
      >
        <Icon 
          name={isPlaying ? "stop" : "play-arrow"} 
          size={24} 
          color={isReady ? "#7c3aed" : "#9ca3af"}
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