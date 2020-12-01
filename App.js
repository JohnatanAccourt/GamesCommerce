import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './components/Main/Main.js';
import Cart from './components/Cart/Cart.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor='#2A2A2A'
                barStyle='#fff'
            />
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="main" component={Main} />
                <Stack.Screen name="cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

