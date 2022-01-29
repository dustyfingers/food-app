import { useState } from 'react'

import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSearch = async (searchTerm, location, limit) => {
        
        const searchParams = {
            limit,
            term: searchTerm,
            location
        }
    
        try
        {

            // search params look as expected...
            // console.log(searchParams)
    
            // this works!
            // const googleRes = await yelp.get('https://www.google.com')
            // console.log(googleRes)
            
            // ! this request fails now with a response code of 400...
            const res = await yelp.get('/search', { params: searchParams })

            console.log(res)
    
            setResults(res.data.businesses)
    
        }
        catch (err) 
        {
    
            setErrorMessage('Something went wrong...')
            console.log(err)
    
        }
    
    }

    return [handleSearch, results, errorMessage]
}