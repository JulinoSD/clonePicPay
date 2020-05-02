import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AntDesign, Ionicons} from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './components/PayButton';
import PayButton from './components/PayButton';
import { NavigationRouteContext } from '@react-navigation/native';

const incons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: Ionicons,
        name: 'ios-settings'
    },
}
const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions = {({ route, navigation })=>({
                tabBarIcon: ({ color, size, focused }) => {
                    if(route.name === 'Pay'){
                        return (
                        <PayButton onPress = {() => navigation.navigate('Pay')} focused={focused}/>);
                    }
                    const {lib: Icon, name} = incons[route.name];
                    return <Icon name = {name} size = {size} color={color}/>;
                }
            })}
            tabBarOptions = {
                {
                    style: {
                        backgroundColor: '#131418',
                        borderTopColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#92929c'
                }
            }
            >
            <Tab.Screen name="Home" component={HomeScreen} options={{title:'INICIO',}}/>
            <Tab.Screen name="Wallet" component={WalletScreen} options= {{title:'CARTEIRA',}}/>
            <Tab.Screen name="Pay" component={PayScreen} options= {{title:'',}}/>
            <Tab.Screen name="Settings" component={WalletScreen} options= {{title:'CONFIG',}}/>
            <Tab.Screen name="Notifications" component={WalletScreen} options= {{title:'NOTIF',}}/>
        </Tab.Navigator>
    );
}