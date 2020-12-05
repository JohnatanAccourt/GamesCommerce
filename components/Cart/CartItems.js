import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function CartItems({ cover, name, price, removeItem }){
    return(
        <View style={styles.Items}>
            <View style={styles.wrapperItems}>
                <View style={styles.innerItems}>
                    <Image source={cover} style={styles.coverImage} />
                    <View style={styles.texts}>
                        <Text style={styles.gameName}>{name}</Text>
                        <Text style={styles.priceName}>{price}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnRemove} onPress={removeItem}>
                    <Text style={styles.removeIcon}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}