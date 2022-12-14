import React from 'react';
import { MantineProvider as StyleProvider } from '@mantine/core';

interface IProps {
    children: React.ReactNode
}

const MantineProvider:React.FC <IProps> = ({children}) => {
    return (
        <StyleProvider
            withNormalizeCSS
            withGlobalStyles
            theme={{
                colorScheme: 'dark',
                colors: {
                    blue: ['#2DAAFC'],
                    purple: ['#4E23FA', '#4E23FA80'],
                    yellow: ['#fACB23'],
                    green: ['#00d115'],
                    red: ['#c90000'],

                    black: ['#1A1A1A', '#1f1f1f'],
                    white: ['#FFFFFF', '#E1E1E1'],
                }
            }}
        >
            {children}
        </StyleProvider>
    );
};

export default MantineProvider;