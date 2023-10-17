import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
        'Bearer wwnKlnoJFWE2Pz3M5SAODGhM0owadFg1Q4d2d5-WSFjAzFD1NqI1fONOj9wL7V_EAcVwIPPKoHPD2TtHUSA9rvyQ-PPo3B9bWpKpCCmFDEuN9Gz8WLvrDUlTxyojZXYx',
    }
})