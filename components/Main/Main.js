import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList, Image, SafeAreaView } from "react-native";
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './Header';
import Swipe from './Swipe';
import Filters from './Filters';
import Games from './Games';

import styles from './styles';
import information from '../../utils/products.json';
import posibilities from '../../utils/posibilities.js';

import {
    sortedListToAlpha, 
    sortedListToPopularity,
    sortedListToPrice
} 
from '../../utils/util';

export default function Main({ navigation }){
    const [data, setData] = useState([]);
    const [numCart, setNumCart] = useState(0);
    
    var ArrayGames = [];

    useEffect(() => {
        setData(information);
    }, [])
    
    function orderListToAlpha(){
        const sorted = sortedListToAlpha(data);
        setData(sorted);
    }

    function orderListToPopularity(){
        const sorted = sortedListToPopularity(data);
        setData(sorted);
    }

    function orderListToPrice(){
        const sorted = sortedListToPrice(data);
        setData(sorted);
    }

    async function handleToCart(data){
        console.log(ArrayGames)
        try{
            let items = await AsyncStorage.getItem('@Game');
            items = JSON.parse(items);

            if(ArrayGames.length && items){
                items.push(data);

                await AsyncStorage.setItem('@Game', JSON.stringify(items));
                Toast.show('Adicionado ao Carrinho');

            }else{
                if(!items){
                    ArrayGames = [];
                    ArrayGames.push(data);
                }else{
                    ArrayGames.push(data);
                }
                await AsyncStorage.setItem('@Game', JSON.stringify(ArrayGames));
                Toast.show('Adicionado ao Carrinho');
                
            }
            
        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={styles.container}>
            <FlatList 
                ListHeaderComponent={
                    <>
                        <Header backToHome={null} showArrow={false} showCart={false} numItens={numCart} onPress={() => navigation.navigate('cart')} />
                        <Swipe />
                        <Filters 
                            onPressAlpha={() => orderListToAlpha()} 
                            onPressPrice={() => orderListToPrice()} 
                            onPressPopularity={() => orderListToPopularity()} 
                        />
                    </>
                }
                data={data}
                style={styles.gamesList}
                contentContainerStyle={{ flexShrink: 1, flexGrow: 1 }}
                keyExtractor={games => String(games.name)}
                columnWrapperStyle={{justifyContent:'space-evenly'}}
                numColumns={2}  
                renderItem={({ item:game }) => (
                    <Games 
                        rate={game.score} 
                        cover={posibilities[game.image]}
                        name={game.name}
                        price={Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(game.price)}
                        onPress={() => handleToCart(game)}
                    />
                )}
            />
        </View>
    )
}