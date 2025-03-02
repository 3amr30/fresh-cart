import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider({children}){

    const [userToken, setUserToken] = useState(null);
    const [loadding, setLoadding] = useState(false);
    useEffect( ()=>{
        if(localStorage.getItem("token")){
            setUserToken(localStorage.getItem("token"))
            setLoadding(true)
        }
    },[])

    return<>
    <UserContext.Provider value={{userToken, setUserToken,loadding, setLoadding}}> 
        {children}
    </UserContext.Provider>
    </>}
