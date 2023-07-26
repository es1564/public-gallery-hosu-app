import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/screens/RootStack';
import { UserContextProvider } from './app/contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
