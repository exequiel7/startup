import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Styles from './styles.js'

export default class Topic2 extends React.Component {
    render() {
    return (
        <View style={Styles.container}>
            <View style={[Styles.box1, Styles.border]} />
            <View style={[Styles.box2, Styles.border]} />
            <View style={[Styles.box3, Styles.border]} />
        </View>
    );
    }
}