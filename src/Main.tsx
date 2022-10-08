import React, { useContext } from "react";

import { AuthContext } from "./providers/contexts/auth.context";



import AuthRoutes from "./routes/auth.routes";
import AppRoutes from "./routes/app.routes";

import Splash from "./components/organisms/Splash";



export default function Main() {

    
    const { signed, loading } = useContext(AuthContext);


    if (loading) {
        return <Splash/>
    }
    

    return signed ? <AppRoutes/> : <AuthRoutes/>;
}
