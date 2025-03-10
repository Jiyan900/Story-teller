import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { InsertStory } from '@shared/schema';
import { SpeechControls } from '../components/SpeechControls';

type RootStackParamList = {
  Home: undefined;
  Story: { story: InsertStory };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Story'>;

export function StoryScreen({ route, navigation }: Props) {
  const { story } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>A Story for {story.childName}</Text>

        <SpeechControls text={story.content} language={story.language} />

        {story.content.split('\n\n').map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Create Another Story</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Image
            source={require('../assets/DPS_logo_2-removebg-preview.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.footerText}>Powered by DPS Nagaon</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#7c3aed',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#1f2937',
  },
  button: {
    backgroundColor: '#7c3aed',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  logo: {
    height: 32,
    width: 32,
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
});