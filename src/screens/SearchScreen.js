import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import { sharedStyles } from '../styles/shared/shared';

const styles = StyleSheet.create({

});

const SearchScreen = () => {
    return (
        <View style={sharedStyles.pageContainer}>
            <SearchBar />
        </View>
    );
};

export default SearchScreen;