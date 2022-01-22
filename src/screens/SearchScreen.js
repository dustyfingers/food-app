import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// look up react-native-geolocaiton-service 

import SearchBar from '../components/SearchBar';
import { sharedStyles } from '../styles/shared/shared';
import yelp from '../api/yelp';

const styles = StyleSheet.create({

});

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearchSubmitted = async () => {
        
        const searchParams = {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
        }

        try
        {

            const res = await yelp.get('/search', { params: searchParams });
    
            console.log({ businesses: res.data.businesses });

        }
        catch (err) 
        {

            setErrorMessage('Something went wrong...')
            console.log(err);

        }


    }
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={term => setSearchTerm(term)}
                onSearchTermSubmit={() => handleSearchSubmitted()} />

                <Text>{errorMessage}</Text>

                <Text>We have found {results.length} results{results.length ? ":" : null}</Text>

        </View>

    );

};

export default SearchScreen;