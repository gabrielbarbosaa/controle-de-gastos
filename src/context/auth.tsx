import React, { createContext } from 'react';
import { useAuthorize } from '../hooks/index';

interface IProps {
    children: React.ReactNode
}

interface AuthContextData {
    signed: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC <IProps> = ({children}) => {
    return (
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;