import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './../config/colors';

const Header = props => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle}>{props.title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerStyle: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 18,
    }
});