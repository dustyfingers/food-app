import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import { sharedStyles } from '../styles/shared/shared'
import useResults from '../hooks/useResults'

const styles = StyleSheet.create({})

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [handleSearch, results, errorMessage] = useResults()

    // TODO: call search api when component is first rendered with user current location
    // look up react-native-geolocation-service 
    // useEffect(() => {handleSearch('burgers', 'nyc', 50)}, [])
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchTermSubmit={() => handleSearch(searchTerm, 'nyc', 200)} />

                <Text>{errorMessage}</Text>
                <Text>We have found {results.length} results{results.length ? ":" : null}</Text>

                <ResultsList title={'Cost Effective'} />
                <ResultsList title={'Bit Pricier'} />
                <ResultsList title={'Big Spender'} />

        </View>

    )

}

export default SearchScreen