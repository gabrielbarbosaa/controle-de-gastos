import React, { createContext, useState } from 'react';
import { api, queryClient } from "../services";
import { IAuthorize, IUserAuth } from '../interfaces/IAuthorize';
import { useMutation } from '@tanstack/react-query';

interface IProps {
    children: React.ReactNode
}

interface AuthContextData {
    signed: boolean;
    postAuthorize: any;
    user: object | null;
    Logout: any
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC <IProps> = ({children}) => {
    const [ user, setUser ] = useState<object | null>(null);

    const useAuthorize = async (data: IAuthorize):Promise<IUserAuth> => {
        const resp = await api.post<IUserAuth>('/authorize', data)

        return resp.data;
    };

    const Logout = () => {
        setUser(null);
    
        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
    };

    const { mutate: postAuthorize } = useMutation(useAuthorize, {
        onSuccess: (resp) => {
            queryClient.invalidateQueries(['user'])
            setUser(resp.user);
            api.defaults.headers.Authorization = `Bearer ${resp.token}`;
            localStorage.setItem('@App:user', JSON.stringify(resp.user));
            localStorage.setItem('@App:token', resp.token);
        }
    });

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, postAuthorize, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;