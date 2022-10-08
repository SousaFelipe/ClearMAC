import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "./contexts/auth.context";
import { csrf, ping } from "../shared/api";
import storageService from "../services/storage.service";



function AuthProvider({ children }: any) {



    const [signed, setSigned] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [csrfToken, setCsrfToken] = useState<string>('');
    const [useSafeMode, setUseSafeMode] = useState<boolean>(true);



    useEffect(() => {

        const trySignIn = async () => {
            const pin = await storageService.load(storageService.keys.PIN_KEY);

            if (pin) {
                signIn(pin);
            }
            else {
                setCsrfToken('');
                setSigned(false);
                setLoading(false);
            }
        }

        (async () => {
            let PING = 0;

            let timeout = setInterval(() => {

                ping('170.82.28.252', (miliseconds: any) => {

                    if (!miliseconds || miliseconds > 1000) {
                        setCsrfToken('');
                        setSigned(false);
                        setLoading(false);
                    }
                    else {
                        if (PING == 3) {
                            trySignIn();
                            clearInterval(timeout);
                        }
                    }

                    PING++;
                    
                });

            }, 1000);

        })();

    }, []);



    async function signIn(pin: string) : Promise<number> {
        let output: number = 0;
        
        try {
            setLoading(true);

            const response = await csrf().get(`/csrf/${ pin }`);
            output = (response.status == 200 && response.data.csrf_token) ? 1 : 0;

            if (output) {
                await storageService.save(storageService.keys.PIN_KEY, pin);

                setCsrfToken(response.data.csrf_token);
                setSigned(true);
            }
            else {
                await storageService.remove(storageService.keys.PIN_KEY);

                setCsrfToken('');
                setSigned(false);
            }
        }
        catch (error: any) {
            output = -1;
        }
        finally {
            setLoading(false);
        }

        return output;
    }



    async function toggleSafeMode() {
        const useSSL = await storageService.load(storageService.keys.SSL_KEY, true);

        if (useSSL !== null) {
            await storageService.save(storageService.keys.SSL_KEY, !useSSL);
            setUseSafeMode(!useSSL);
        }
        else {
            await storageService.save(storageService.keys.SSL_KEY, true);
            setUseSafeMode(true);
        }
    }



    return (
        <AuthContext.Provider value={{ signed, loading, csrfToken, useSafeMode, signIn, toggleSafeMode }}>
            { children }
        </AuthContext.Provider>
    );
}



function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }
  
    return context;
}



export { AuthProvider, useAuth }
