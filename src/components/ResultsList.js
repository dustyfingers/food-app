import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { theme } from '../styles/shared/shared'

const styles = StyleSheet.create({
    title: {
        fontSize: theme.largeFontSize,
        fontWeight: 'bold'
    }
})

const ResultsList = ({ title, results }) => {

    return (

        <View>

            <Text style={styles.title}>{title}</Text>

            <Text>{results.length}</Text>

        </View>

    )

}

export default ResultsList