import { useEffect, useState } from "react";

export const useFetch = () =>{
    const [fetcho, setFetcho] = useState({loading: false})

    useEffect(() => {
        fetch('http://localhost:3010/')
        .then( res => res.json())
        .then( dat => {
            setFetcho({...dat, loading: true})
            // console.log(dat);
        })
        .catch ( err => setFetcho({...fetcho, error : err}))
    }, []);


    return  fetcho
}