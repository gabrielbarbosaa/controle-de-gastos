import React, { useState } from 'react';
import { DrawerProps, createPolymorphicComponent } from '@mantine/core';
import { logo } from '../../assets';
import * as S from './style';

const StyledDrawer = createPolymorphicComponent<'drawer', DrawerProps>(S.Menu);

const Aside: React.FC = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <>
            <S.Container
                onMouseEnter={() => setOpen(!open)}
            >
                <img src={logo}/>
            </S.Container>
            <StyledDrawer 
                opened={open}
                onClose={() => setOpen(!open)}
                position="left" 
                component={'symbol'}  
                trapFocus={true} 
                title={
                    <>
                        <S.SmallLogo src={logo}/>
                        Controle de gastos
                    </>
                }  
            >
                
            </StyledDrawer>
        </>
    )
}

export default Aside;