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
        // doing this makes the input collapse (not full height of parent)
        // alignItems: 'center'
    },
    iconStyle: {
        fontSize: 35,
        // this doesnt make the input collapse
        alignSelf: 'center',
        marginHorizontal: 10
    },
    inputStyles: {
        fontSize: 18
    }
});

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {

    return (

        <View style={styles.searchContainer}>

            <Feather name={'search'} style={styles.iconStyle} />

            <TextInput 
                placeholder={'Search'} 
                style={styles.inputStyles} 
                value={searchTerm} 
                onChangeText={onSearchTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onSearchTermSubmit} />

        </View>

    );

};

export default SearchBar;