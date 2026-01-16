import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack screenOptions={{ 
      headerShown: false, 
     
    }}>
      
      <Stack.Screen 
        name="auth/index" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="(drawer)" 
        options={{ headerShown: false }} 
      />

    </Stack>

    
  );
};

export default StackLayout;