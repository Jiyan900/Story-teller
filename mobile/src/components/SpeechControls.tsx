import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SpeechControlsProps {
  text: string;
  language?: string;
}

export function SpeechControls({ text, language = 'en' }: SpeechControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initSpeech = async () => {
      try {
        // Use ResponsiveVoice for web
        if (Platform.OS === 'web') {
          if (typeof window !== 'undefined' && window.responsiveVoice) {
            if (!window.responsiveVoice.voiceSupport()) {
              console.log('RV: Voice synthesis not supported');
              console.log('RV: Enabling fallback mode');
            }
            if (isMounted) {
              setIsReady(true);
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

      if (isPaused) {
        if (Platform.OS === 'web') {
          window.responsiveVoice.resume();
        } else {
          const Tts = require('@react-native-community/tts').default;
          await Tts.resume();
        }
        setIsPaused(false);
        setIsPlaying(true);
        return;
      }

      setIsPlaying(true);
      setIsPaused(false);

      if (Platform.OS === 'web') {
        if (window.responsiveVoice) {
          window.responsiveVoice.speak(text, 
            language === 'hi' ? 'Hindi Female' : 'UK English Female',
            {
              pitch: 1,
              rate: 0.9,
              onend: () => {
                setIsPlaying(false);
                setIsPaused(false);
              },
              onerror: (error) => {
                console.error('Speech error:', error);
                setIsPlaying(false);
                setIsPaused(false);
              }
            }
          );
        }
      } else {
        const Tts = require('@react-native-community/tts').default;
        await Tts.speak(text, {
          language: language === 'hi' ? 'hi-IN' : 'en-US',
          pitch: 1,
          rate: 0.8,
          onDone: () => {
            setIsPlaying(false);
            setIsPaused(false);
          },
          onError: (error) => {
            console.error('TTS error:', error);
            setIsPlaying(false);
            setIsPaused(false);
          }
        });
      }
    } catch (error) {
      console.error('Speech error:', error);
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const pause = () => {
    if (Platform.OS === 'web') {
      if (window.responsiveVoice) {
        window.responsiveVoice.pause();
      }
    } else {
      const Tts = require('@react-native-community/tts').default;
      Tts.pause();
    }
    setIsPaused(true);
    setIsPlaying(false);
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
    setIsPaused(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={isPaused ? speak : (isPlaying ? pause : speak)}
        style={styles.button}
        disabled={!isReady}
      >
        <Icon 
          name={isPaused ? "play-arrow" : (isPlaying ? "pause" : "play-arrow")}
          size={24} 
          color={isReady ? "#7c3aed" : "#9ca3af"}
        />
      </TouchableOpacity>
      {(isPlaying || isPaused) && (
        <TouchableOpacity 
          onPress={stop}
          style={styles.button}
          disabled={!isReady}
        >
          <Icon 
            name="stop" 
            size={24} 
            color={isReady ? "#7c3aed" : "#9ca3af"}
          />
        </TouchableOpacity>
      )}
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