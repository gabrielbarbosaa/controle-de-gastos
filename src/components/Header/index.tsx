import React from 'react';
import * as S from './style';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import {
    IconLogout,
    IconSun, 
    IconMoonStars
} from '@tabler/icons';

const Header: React.FC = () => {
    const theme = useMantineTheme();
    return (
        <S.Container>
            <Switch
                className='switch'        
                color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
                size="md"
                onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[0]} />}
                offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[0]} />}
            />
            <div>
                <p>Bem vindo novamente</p>
                <b>Gabriel </b>
            </div>
            <button type="button">
                <p>Sair</p>
                <IconLogout />
            </button>
        </S.Container>
    )
}

export default Header;