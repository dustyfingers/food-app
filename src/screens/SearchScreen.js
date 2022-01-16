import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import { sharedStyles } from '../styles/shared/shared';

const styles = StyleSheet.create({

});

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar searchTerm={searchTerm} onSearchTermChange={newTerm => setSearchTerm(newTerm)} />

        </View>

    );

};

export default SearchScreen;