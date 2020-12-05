import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native"; 

import { Ionicons } from '@expo/vector-icons'; 

import Cart from '../../assets/icons/cart-icon.svg';
import styles from './styles';

export default function Header({ onPress, showCart, showArrow, backToHome }){
    return(
        <View style={styles.header}>
            { showArrow ? 
                <Ionicons
                    style={{color: 'white'}}
                    name='md-arrow-back'
                    size={50}
                    onPress={backToHome} 
                /> 
            :
                <Image source={require('../../assets/icon.png')} style={styles.logo} />
            }
            <Text style={styles.headerText}>Games-Commerce</Text>
            
            {showCart ? 
                    <TouchableOpacity style={styles.wrapperCart} onPress={onPress}>
                        <Cart height='50' width='50'/>
                    </TouchableOpacity>
                :
                <></>
            }
        </View>
    )
}