import { useEffect, useState } from "react";

export const useFetch = ({url} , endpoint) =>{
    const [fetcho, setFetcho] = useState({loading: false})
    let heroku = import.meta.env.VITE_HEROKU ? import.meta.env.VITE_HEROKU : 'http://localhost:3010/'
    // let heroku = import.meta.env.VITE_HEROKU
    
    if(url){
        heroku += endpoint + url
    }

    // console.log(url);
    // console.log(endpoint);
    console.log(heroku);

    useEffect(() => {
        fetch(heroku)
        .then( res => res.json())
        .then( dat => {
            setFetcho({...dat, loading: true})
            // console.log(dat);
        })
        .catch ( err => setFetcho({...fetcho, error : err}))
    }, []);


    return  fetcho
}

