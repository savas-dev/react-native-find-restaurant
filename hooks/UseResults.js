import { useEffect, useState } from "react";
import backend from "../api/backend";

export default () =>{

    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchWord)=>{ 
        try {
            const response = await backend.get('/search',{
                params:{
                    limit: 50,
                    term: searchWord,
                    location: 'istanbul',
                }
            })
            setResults(response.data.businesses)
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Bağlantı hatası')
        }
    }

    useEffect(() => {
        searchApi('')
    }, [])

    return [searchApi, results, errorMessage]
    
}