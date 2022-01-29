import { useEffect, useState } from 'react'

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
    
            const res = await yelp.get('/search', { params: searchParams })
    
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