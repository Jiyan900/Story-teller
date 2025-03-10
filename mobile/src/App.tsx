import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { StoryScreen } from './screens/StoryScreen';
import type { InsertStory } from '@shared/schema';

type RootStackParamList = {
  Home: undefined;
  Story: { story: InsertStory };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Magical Stories' }}
        />
        <Stack.Screen 
          name="Story" 
          component={StoryScreen}
          options={{ title: 'Your Story' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}