import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../page/Home';
import { BottomNavigationParams } from '../types/types';
import Setting from '../page/Setting';

const Tab = createBottomTabNavigator<BottomNavigationParams>();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomNavigation