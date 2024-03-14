import React, {createContext, useState, ReactNode} from "react";

export type ContextInfo = {
    showContact: boolean
    }

export interface contextInterface {
    contextInfo: ContextInfo,
    setContextInfo: (updater: (contextInfo: ContextInfo) => ContextInfo) => void;
}

const initialState = {
    contextInfo: {
        showContact: false
    },
    setContextInfo: ()  =>  {}
}

export const ContextInfo = createContext<contextInterface>(initialState)

type ProviderProps = {
    children: ReactNode
}

export default function contextInfoProvider({children} : ProviderProps){

    const [contextInfo, setContextInfo] = useState<ContextInfo>({
       showContact: false,
    });

    return (
        <ContextInfo.Provider value={{contextInfo, setContextInfo}} >
            {children}
        </ContextInfo.Provider>
    )
}
