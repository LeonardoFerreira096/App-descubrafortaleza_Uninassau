// app/(tabs)/_layout.tsx

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Cores para light e dark mode
  const colors = {
    light: {
      tint: '#2563eb',
      background: '#fff',
      text: '#000',
    },
    dark: {
      tint: '#60a5fa',
      background: '#000',
      text: '#fff',
    },
  };

  const activeColor = colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor.tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: activeColor.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size || 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size || 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}