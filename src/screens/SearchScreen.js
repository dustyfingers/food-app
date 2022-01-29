import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// look up react-native-geolocation-service 

import SearchBar from '../components/SearchBar'
import { sharedStyles } from '../styles/shared/shared'
import useResults from '../hooks/useResults'

const styles = StyleSheet.create({

})

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [handleSearch, results, errorMessage] = useResults()

    // call search api when component is first rendered
    useEffect(() => {handleSearch('burgers', 'nyc', 50)}, [])
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchTermSubmit={() => handleSearch(searchTerm, 'nyc', 200)} />

                <Text>{errorMessage}</Text>

                <Text>We have found {results.length} results{results.length ? ":" : null}</Text>

        </View>

    )

}

export default SearchScreen