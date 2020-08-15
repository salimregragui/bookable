import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const BooksListItem = () => {
    return (
        <View style={styles.BooksListItem}>
            <Image style={styles.image} style={styles.bookImage} source={{uri: 'https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_scaled,f_auto,q_auto,dpr_2,c_scale,w_405/v1553632916/pro_pbid_13746.jpg'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    BooksListItem: {
        
    },
    image: {
        width: 120,
        height: 180
    }
});

export default BooksList

