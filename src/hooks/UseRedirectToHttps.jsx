import {useEffect} from 'react';
import {useLocation} from "react-router";

export const UseRedirectToHttps = () => {
    let location = useLocation()
    useEffect(() => {

        if (window.location.host === 'localhost:3000' || window.location.host === 'localhost:3001') return
        
        if (window.location.protocol!=="https:") {
            window.location.replace("https://www.ccbsbonao.com.do"+location.pathname) || window.location.replace("https://ccbsbonao.com.do"+location.pathname);
        }
    })
};