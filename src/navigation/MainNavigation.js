import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailPayment from '../screens/detail-payment/DetailPayment';
import GuestList from '../screens/guest-list/GuestList';
import First from '../screens/first/First';
import EditGuestList from '../screens/guest-list/EditGuestList';

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
                    options={{
                        headerTitle: 'Payment Details',
                        headerStyle: { backgroundColor: '#335997' },
                        headerTitleStyle: { color: 'white' },
                        headerTitleAlign: 'center',
                        headerTintColor: 'white'
                    }}
                />
                <Stack.Screen
                    name='list'
                    component={GuestList}
                    options={{
                        headerTitle: 'Tambah Data Tamu',
                        headerStyle: { backgroundColor: '#335997' },
                        headerTitleStyle: { color: 'white' },
                        headerTitleAlign: 'center',
                        headerTintColor: 'white'
                    }}
                />
                <Stack.Screen
                    name='edit-list'
                    component={EditGuestList}
                    options={{
                        headerTitle: 'Tambah Data Tamu',
                        headerStyle: { backgroundColor: '#335997' },
                        headerTitleStyle: { color: 'white' },
                        headerTitleAlign: 'center',
                        headerTintColor: 'white'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation