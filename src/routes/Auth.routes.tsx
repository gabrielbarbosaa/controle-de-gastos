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

    let token = localStorage.getItem("token")

    const ProtectedRoute = ({ children }: any) => {
        if (!token) {
          return <Navigate to="/" replace />;
        }
        return children;
      };

    const routes = [
        { id: 1, path: '/dashboard', component: <ProtectedRoute> <Dashboard /> </ProtectedRoute>},
        { id: 2, path: '/despesas', component: <ProtectedRoute> <Despesas /> </ProtectedRoute>},
        { id: 3, path: '/receita', component: <ProtectedRoute> <Receitas /> </ProtectedRoute>},
        { id: 4, path: '/configuracoes', component: <ProtectedRoute> <Configuracao /> </ProtectedRoute>},
        { id: 5, path: '/mensagens', component: <ProtectedRoute> <Mensagens /> </ProtectedRoute>},
        { id: 6, path: '/notificacoes', component: <ProtectedRoute> <Notificacoes /> </ProtectedRoute>},
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