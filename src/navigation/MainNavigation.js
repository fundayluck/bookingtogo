import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailPayment from '../screens/detail-payment/DetailPayment';
import GuestList from '../screens/guest-list/GuestList';
import First from '../screens/first/First';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='first'>
                <Stack.Screen
                    name='first'
                    component={First}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='detail'
                    component={DetailPayment}
                />
                <Stack.Screen
                    name='list'
                    component={GuestList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation