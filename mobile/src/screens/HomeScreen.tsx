import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { animals, storyThemes, type InsertStory } from '@shared/schema';
import { generateStory } from '@shared/story-templates';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Story: { story: InsertStory };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [formData, setFormData] = useState<Omit<InsertStory, 'content'>>({
    childName: '',
    animal: undefined,
    theme: undefined,
  });

  const handleSubmit = async () => {
    try {
      if (!formData.animal || !formData.theme) {
        return; // Form validation will prevent this
      }

      const content = generateStory(formData);
      const story: InsertStory = { ...formData, content };

      // For now, we'll just navigate to the story screen with the generated content
      // Later we'll implement API integration
      navigation.navigate('Story', { story });
    } catch (error) {
      console.error('Error generating story:', error);
      // Show error message to user
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create a Magical Story</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Child's Name</Text>
        <TextInput
          style={styles.input}
          value={formData.childName}
          onChangeText={(text) => setFormData({ ...formData, childName: text })}
          placeholder="Enter name..."
        />

        <Text style={styles.label}>Favorite Animal</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.animal}
            onValueChange={(value) => setFormData({ ...formData, animal: value })}
          >
            <Picker.Item label="Select an animal" value="" />
            {animals.map((animal) => (
              <Picker.Item key={animal} label={animal} value={animal} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Story Theme</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.theme}
            onValueChange={(value) => setFormData({ ...formData, theme: value })}
          >
            <Picker.Item label="Select a theme" value="" />
            {storyThemes.map((theme) => (
              <Picker.Item key={theme} label={theme} value={theme} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            (!formData.childName || !formData.animal || !formData.theme) && styles.buttonDisabled
          ]}
          onPress={handleSubmit}
          disabled={!formData.childName || !formData.animal || !formData.theme}
        >
          <Text style={styles.buttonText}>Generate Story</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#7c3aed', // matches web primary color
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#7c3aed',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#d1d5db',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});