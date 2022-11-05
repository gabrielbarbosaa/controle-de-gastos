import React, { useState } from 'react';
import * as S from './style';
import { 
    DrawerProps, 
    createPolymorphicComponent, 
    Image 
} from '@mantine/core';
import { 
    IconDashboard,
    IconSettings,
    IconMessage,
    IconNotification,
    IconArrowBigDown,
    IconArrowBigTop
} from '@tabler/icons';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets';

const StyledDrawer = createPolymorphicComponent<'drawer', DrawerProps>(S.Menu);

const Aside: React.FC = () => {
    const [ open, setOpen ] = useState(false);
    const routes = [
        { id: 1, path: '/dashboard', name:'Dashboard', icon: <IconDashboard/>},
        { id: 2, path: '/receita', name:'Receita', icon: <IconArrowBigDown />},
        { id: 1, path: '/despesas', name:'Despesas', icon: <IconArrowBigTop/>},
        { id: 2, path: '/configuracoes', name:'Configurações', icon: <IconSettings />},
        { id: 3, path: '/mensagens', name:'Mensagens', icon: <IconMessage />},
        { id: 4, path: '/notificacoes', name:'Notificações', icon: <IconNotification />},
    ];

    return (
        <>
            <S.Container
                onMouseEnter={() => setOpen(!open)}
            >
                <img src={logo}/>
                <S.ClosedNav>   
                    {routes.map((id: any, index: number) => (
                        <S.Link 
                            to={id.path}
                            key={index}
                        >
                            {id.icon}
                        </S.Link>
                    ))}
                </S.ClosedNav>
            </S.Container>
            <StyledDrawer 
                opened={open}
                onClose={() => setOpen(!open)}
                position="left" 
                component={'symbol'}  
                trapFocus={true} 
                closeButtonLabel="Fechar"
                title={
                    <>
                        <S.SmallLogo src={logo}/>
                        Controle de gastos
                    </>
                }  
            >
                <>
                    <S.Perfil>
                        <div>
                            <img 
                                src="https://picsum.photos/200"
                                alt="profile picture"
                            />
                            <p>Gabriel Barbosa</p>
                        </div>
                        <div>
                            <p>status da conta:</p>
                            <p>Bom!</p>
                        </div>
                    </S.Perfil>
                    <S.OpenNav>   
                        {routes.map((id: any, index: number) => (
                            <S.Link 
                                to={id.path}
                                key={index}
                                onClick={() => setOpen(!open)}
                            >
                                {id.icon}
                                <p>
                                    {id.name}
                                </p>
                            </S.Link>
                        ))}
                    </S.OpenNav>
                </>
            </StyledDrawer>
        </>
    )
}

export default Aside;