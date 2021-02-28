import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';


interface CountdownContextData {

}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider( {children} : CountdownProviderProps) {
    return (
        <CountdownContext.Provider value={{}}>
        {children}
        </CountdownContext.Provider>
  )
}
