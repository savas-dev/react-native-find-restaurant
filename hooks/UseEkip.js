import { useEffect, useState } from "react";
import backend from "../api/backend";

export default () =>{

    const [ekip, setekip] = useState([])
    const count = 2

    const searchEkip = async (searchWord2)=>{ 
        const response2 = await backend.get('/ekip',{
            params:{
                search: searchWord2,
                limit: 1
            }
        })
        setekip(response2.data)
    }

    useEffect(() => {
        searchEkip()
    }, [])
    
    return [searchEkip, ekip]
    
}