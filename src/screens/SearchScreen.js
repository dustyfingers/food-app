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

    const filterResultsByPrice = price => results.filter(result => result.price === price)
    
    return (

        <View style={sharedStyles.pageContainer}>

            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                onSearchTermSubmit={() => handleSearch(searchTerm, 'nyc', 200)} />

                <Text>{errorMessage}</Text>

                {/* 
                    
                    DON'T DO THIS IN REACT NATIVE
                    widgetNumber === 10 && <MyComponent />

                    DO THIS INSTEAD
                    widgetNumber === 10 ? <MyComponent /> : null 
                    ! USE NULL SPECIFICALLY
                
                */}

                {results.length ? (

                    <>

                        <Text>We have found {results.length} results{results.length ? ":" : ""}</Text>

                        <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'} />
                        <ResultsList results={filterResultsByPrice('$$')} title={'Bit Pricier'} />
                        <ResultsList results={filterResultsByPrice('$$$')} title={'Big Spender'} />
                        <ResultsList results={filterResultsByPrice('$$$')} title={'Scrooge McDuck'} />

                    </>

                ) : null}

        </View>

    )

}

export default SearchScreen