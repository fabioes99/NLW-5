
import React from 'react';
import { Home } from './src/screens/home';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <StatusBar
        style='light'
        translucent
        backgroundColor='transparent'
      />
      <Home />
    </AuthProvider >
  );
}


