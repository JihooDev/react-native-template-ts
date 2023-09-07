import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../page/Home';
import { BottomNavigationParams } from '../types/types';
import Setting from '../page/Setting';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator<BottomNavigationParams>();

const BottomNavigation = (): JSX.Element => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <CustomBottomTab {...props} />}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomNavigation