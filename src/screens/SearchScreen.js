import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import { sharedStyles } from '../styles/shared/shared';
import yelp from '../api/yelp';

const styles = StyleSheet.create({

});

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState();

    const handleSearchSubmitted = async () => {
        
        const searchParams = {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
        }

        const res = await yelp.get('/search', {
            params: searchParams
        });

        console.log({ businesses: res.data.businesses });

    }
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={term => setSearchTerm(term)}
                onSearchTermSubmit={() => handleSearchSubmitted()} />

        </View>

    );

};

export default SearchScreen;