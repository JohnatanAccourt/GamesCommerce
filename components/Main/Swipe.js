import React from 'react';
import { View, Image } from "react-native";

import Swiper from 'react-native-swiper';

import styles from './styles';

export default function Swipe(){
    return(
        <View style={styles.wrapperSwipe}>
            <Swiper 
                style={styles.swipper}
                showsButtons={true}
                autoplay={true}
                height={250} 
                showsButtons={false}
                activeDotStyle={{backgroundColor: 'red'}}
                dotStyle={{backgroundColor: 'white'}}
            >
                <View style={styles.slide}>
                    <Image resizeMode='cover' source={require('../../assets/carrossel/1.jpg')}/>
                </View>

                <View style={styles.slide}>
                    <Image resizeMode='cover' source={require('../../assets/carrossel/2.jpg')}/>
                </View>

                <View style={styles.slide}>
                    <Image resizeMode='cover' source={require('../../assets/carrossel/3.jpg')}/>
                </View>

                <View style={styles.slide}>
                    <Image resizeMode='cover' source={require('../../assets/carrossel/4.jpg')}/>
                </View>
            </Swiper>
        </View>
    )
}