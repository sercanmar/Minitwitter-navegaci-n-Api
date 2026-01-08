import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./global.css";

const queryClient = new QueryClient();

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, error] = useFonts({
    'Chirp-Regular': require('../assets/fonts/Chirp-Regular.ttf'),
    'Chirp-Medium': require('../assets/fonts/Chirp-Medium.ttf'),
    'Chirp-Bold': require('../assets/fonts/Chirp-Bold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}

export default RootLayout;