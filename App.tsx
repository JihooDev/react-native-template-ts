import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './page/Home';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import BottomNavigation from './navigator/BottomNavigation';
import { RecoilRoot } from 'recoil';
import { StackNavigationParams } from './types/types';

const Stack = createNativeStackNavigator<StackNavigationParams>();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='BottomTab' component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default App;