import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Dashboard, Despesas, Receitas, Relatórios } from '../pages';

const AuthRoutes: React.FC = () => {

    const routes = [
        { id: 1, path: '/dashboard', component: <Dashboard />},
        { id: 2, path: '/configuracoes', component: <Despesas />},
        { id: 3, path: '/mensagens', component: <Receitas />},
        { id: 4, path: '/notificacoes', component: <Relatórios />},
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