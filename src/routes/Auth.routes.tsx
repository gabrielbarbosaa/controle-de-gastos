import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { 
    Dashboard, 
    Despesas, 
    Mensagens, 
    Notificacoes, 
    Receitas, 
    Configuracao, 
    SignUp,
    SignIn
} from '../pages';

const AuthRoutes: React.FC = () => {

    const routes = [
        { id: 1, path: '/dashboard', component: <Dashboard />},
        { id: 2, path: '/despesas', component: <Despesas />},
        { id: 3, path: '/receita', component: <Receitas />},
        { id: 4, path: '/configuracoes', component: <Configuracao />},
        { id: 5, path: '/mensagens', component: <Mensagens />},
        { id: 6, path: '/notificacoes', component: <Notificacoes />},
    ];

    return (
        <Routes>
            {routes.map((id: any) => {
                return (
                    <Route path={id.path} element={id.component} key={id.id}/>
                )
            })}
        </Routes>
    );
};

export default AuthRoutes;