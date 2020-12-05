import React from 'react'; 
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function Games({rate, cover, name, price, onPress}){
    return(
        <>
            <View style={styles.ScrollWrapper}>
                <View style={styles.innerItems}>
                    <View 
                        style={
                            rate <= 100 ?
                                styles.itemRate:
                            rate <= 240 ?
                                [styles.itemRate, styles.orange]:
                            rate <= 300 ?
                                [styles.itemRate, styles.green]:
                            rate <= 400 ?
                                [styles.itemRate, styles.red]:
                                styles.yellow
                        }
                    >
                        <Text style={styles.itemText}>{rate}</Text>
                    </View>
                    <Image style={styles.cover} source={cover} />
                </View>
                <>
                    <Text style={styles.gameName}>{name}</Text>
                    <Text style={styles.gamePrice}>{price}</Text>
                </>

                <TouchableOpacity style={styles.buttomToCart} onPress={onPress}>
                    <Text style={styles.buttomToCartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}