



// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import Setting from './Setting';
// import Setting


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#000"

      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;