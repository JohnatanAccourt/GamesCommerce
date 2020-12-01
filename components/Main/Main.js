import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";

import Swiper from 'react-native-swiper';

import Cart from '../../assets/icons/cart-icon.svg';

import styles from './styles';

export default function Main(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/icon.png')} style={styles.logo} />
                <Text style={styles.headerText}>Games-Commerce</Text>
                <TouchableOpacity style={styles.wrapperCart}>
                    <Cart height='50' width='50'/>
                    <View style={styles.circleCartItens}>
                        <Text style={styles.CartText}>10</Text>
                    </View>
                </TouchableOpacity>
            </View>

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
                        <Image resizeMode='cover' style={styles.slideImage} source={require('../../assets/carrossel/1577894962_epic_story.jpg')}/>
                    </View>

                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.slideImage} source={require('../../assets/carrossel/b4c5cba2ead3ec771a9ef24e29a6f85b55c81b23.jpg')}/>
                    </View>

                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.slideImage} source={require('../../assets/carrossel/pc-games-sale-1280.jpg')}/>
                    </View>

                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.slideImage} source={require('../../assets/carrossel/untitled-3.png')}/>
                    </View>
                </Swiper>
            </View>

            <Text style={styles.title}>See our games available:</Text>

            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>filter by:</Text>
                <View style={styles.wrapperButtons}>
                    <TouchableOpacity style={styles.FilterButton}>
                        <Text style={styles.FilterText}>Price</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FilterButton}>
                        <Text style={styles.FilterText}>Popularity</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FilterButton}>
                        <Text style={styles.FilterText}>Alphabetically</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}