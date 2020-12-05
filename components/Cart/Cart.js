import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

import posibilities from '../../utils/posibilities.js';

import Header from '../Main/Header';
import CartItems from './CartItems';
import CheckOut from './CheckOut.js';

import styles from './styles';

export default function Main({ navigation }){
    const [data, setData] = useState([]);
    const [parcialValue, setParcialValue] = useState(0);
    const [shipmentValue, setShipmentValue] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        async function getData(){
            let items = await AsyncStorage.getItem('@Game');
            items = JSON.parse(items);

            setData(items);
        }

        someValues();
        getData();

    }, [])

    async function someValues(){
        let items = await AsyncStorage.getItem('@Game');
        items = JSON.parse(items);

        if(items){
            const totalItens = items.map((index) => index.price).reduce((acc, att) => acc + att, 0);
            setParcialValue(totalItens);
            
            let shipment = 10 * items.length;
            setShipmentValue(shipment);
        
            if(totalItens > 250){
                shipment = 0;
                setShipmentValue(shipment);
            }

            const totalValue = totalItens + shipment;
            setTotalValue(totalValue);
        }
    }

    async function removeItem(id){
        try{
            let filtered = data.filter((v) => v.id !== id);

            await AsyncStorage.setItem('@Game', JSON.stringify(filtered));
            Toast.show('Removido do Carrinho');

            let items = await AsyncStorage.getItem('@Game');
            items = JSON.parse(items);

            setData(items);
            someValues();

        }catch(err) { console.log(err) }
    }
 
    async function eraseAsyncData(){
        AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => [
            setData([]),
            alert(`Conglats! Enjoy your new games!`)
        ]);

        navigation.navigate('main');
    }

    return(
        <View style={styles.container}>
            <Header backToHome={() => navigation.goBack()} showCart={false} showArrow={true} />
            <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}  
                renderItem={({ item:game }) => (
                    <CartItems
                        cover={posibilities[game.image]}
                        name={game.name}
                        price={Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(game.price)}
                        removeItem={() => removeItem(game.id)}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.emptyWrapper}>
                        <Text style={styles.emptyTextBold}>Cart is empty.</Text>
                        <Text style={styles.emptyText}>Please add some game to show here 😀</Text>
                    </View>
                }
                ListFooterComponent={
                    <View style={styles.checkout}>
                        <View style={styles.line}></View>

                        <CheckOut name='Subtotal' value={parcialValue} />
                        <CheckOut name='Shipment' value={shipmentValue} />
                        <CheckOut name='Total' value={totalValue} />

                        <TouchableOpacity style={styles.btnBuy} onPress={() => eraseAsyncData()}>
                            <Text style={styles.btnText}>Buy it!</Text>
                        </TouchableOpacity>

                    </View>
                }
            />
            </SafeAreaView>
            
        </View>
    )
}