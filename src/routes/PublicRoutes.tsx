import React from 'react';
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from '../pages';

const PublicRoutes: React.FC = () => {

    const routes = [
        { id: 1, path: '/', component: <SignIn />},
        { id: 2, path: '/sign-up', component: <SignUp />},
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

export default PublicRoutes;