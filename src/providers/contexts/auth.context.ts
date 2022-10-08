import { createContext } from "react";



export interface ContextData {
    signed: boolean,
    loading: boolean,
    csrfToken: string | null,
    useSafeMode: boolean,
    signIn(pin: string): Promise<number>,
    toggleSafeMode(): Promise<void>
}



export const AuthContext = createContext<ContextData>({} as ContextData);
