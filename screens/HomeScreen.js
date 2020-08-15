import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/UI/Header';
import { Colors } from '../constants/Colors';

const HomeScreen = (props) => {
    return (
        <View style={styles.home}>
            <Header title="Home" navigation={props.navigation} />
            
            <View style={styles.homeContent}>
                <Text style={styles.title}>Continue Reading</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1
    },
    homeContent: {
        flex: 1,
        marginLeft: 20,
        marginTop: 10
    },
    title: {
        fontFamily: 'poppins-bold',
        color: Colors.lightTheme.primaryColor,
        fontSize: 18
    }
});
export default HomeScreen

