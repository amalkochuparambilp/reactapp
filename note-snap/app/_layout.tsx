import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function TabLayout() {

  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name='index' 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name='create' />
      </Stack>
    </PaperProvider>
  );
}
