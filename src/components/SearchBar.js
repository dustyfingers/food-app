import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyles: {
        marginLeft: 5
    }
});

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <Feather name={'search'} size={30} />
            <TextInput placeholder={'Search'} style={styles.inputStyles} />
        </View>
    );
};

export default SearchBar;