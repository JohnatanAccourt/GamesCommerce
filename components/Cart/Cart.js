import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

import posibilities from '../../utils/posibilities.js';

import Header from '../Main/Header';

import styles from './styles';
// import Games from '../Main/Games.js';

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
            alert(`Conglats! Enjoy your new games!`, 'YEEEEa')
        ]);
    }

    return(
        <View style={styles.container}>
            <Header backToHome={() => navigation.goBack()} showCart={true} showArrow={true} />
            <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}  
                renderItem={({ item:game }) => (
                    <View style={styles.Items}>
                        <View style={styles.wrapperItems}>
                            <View style={styles.innerItems}>
                                <Image source={posibilities[game.image]} style={styles.coverImage} />
                                <View style={styles.texts}>
                                    <Text style={styles.gameName}>{game.name}</Text>
                                    <Text style={styles.priceName}>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(game.price)}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.btnRemove} onPress={() => removeItem(game.id)}>
                                <Text style={styles.removeIcon}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <View style={styles.checkout}>
                        <View style={styles.line}></View>

                        <View style={styles.wrapperTexts}>
                            <Text style={styles.checkoutText}>Subtotal</Text>
                            <Text style={styles.checkoutText}>
                                {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(parcialValue)}
                            </Text>
                        </View>

                        <View style={styles.wrapperTexts}>
                            <Text style={styles.checkoutText}>Shipment</Text>
                            <Text style={styles.checkoutText}>
                                {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(shipmentValue)}
                            </Text>
                        </View>

                        <View style={styles.wrapperTexts}>
                            <Text style={styles.checkoutText}>Total</Text>
                            <Text style={styles.checkoutText}>
                                {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(totalValue)}
                            </Text>
                        </View>

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