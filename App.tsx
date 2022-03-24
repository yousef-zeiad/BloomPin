import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from 'navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from 'services/context/AuthProvider';

export const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient} contextSharing>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </QueryClientProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
