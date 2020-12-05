import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function Filters({onPressPrice, onPressPopularity, onPressAlpha}){
    return(
        <>
            <Text style={styles.title}>See our games available:</Text>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>filter by:</Text>
                <View style={styles.wrapperButtons}>
                    <TouchableOpacity style={styles.FilterButton} onPress={onPressPrice}>
                        <Text style={styles.FilterText}>Price</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FilterButton} onPress={onPressPopularity}>
                        <Text style={styles.FilterText}>Popularity</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.FilterButton} onPress={onPressAlpha}>
                        <Text style={styles.FilterText}>Alphabet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}