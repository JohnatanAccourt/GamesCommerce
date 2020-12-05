import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function CheckOut({ name, value }){
    return(
        <View style={styles.wrapperTexts}>
            <Text style={styles.checkoutText}>{name}</Text>
            <Text style={styles.checkoutText}>
                {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value)}
            </Text>
        </View>
    )
}