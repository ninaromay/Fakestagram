import { useContext } from 'react';
import { Outlet} from 'react-router-dom'
import Header from '../Components/Header'
import { GlobalContext } from '../Global.context';

export const Template= () => {

    let { loading , setLoading }         = useContext(GlobalContext);
    
    return <>
        { loading && <Header></Header> }
        { loading && <Outlet /> }
    </>
}