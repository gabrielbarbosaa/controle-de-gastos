import React, { useState } from 'react';
import * as S from './style';
import { Menu } from '@mantine/core';
import {
    IconTrash,
    IconEdit,
    IconBrandWindows,
    IconDotsVertical
} from '@tabler/icons';

interface IProps {
    name: string,
    type: string
}

const Item: React.FC <IProps> = ({type, name}) => {
    const [ open, setOpen ] = useState(false);
    return (
        <S.Container type={type}>
            <h3>{name}</h3>
            <Menu  
                opened={open}
                closeOnItemClick={true}
                position="left-start"
            >
                <Menu.Target>
                    <button className="trigger" onClick={() => setOpen(!open)}>
                        <IconDotsVertical />
                    </button>
                </Menu.Target>

                <Menu.Dropdown className='dropdown'>
                    <Menu.Item
                        onClick={() => setOpen(!open)}
                    >
                        <button 
                            className="button"
                            onClick={() => {}}
                        >
                            <IconBrandWindows/>
                            Visualizar
                        </button>
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => setOpen(!open)}
                    >
                        <button 
                            className="button"
                            onClick={() => {}}
                        >
                            <IconEdit />
                            Editar
                        </button>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                        onClick={() => setOpen(!open)}
                    >
                        <button 
                            className="button danger"
                            onClick={() => {}}
                        >
                            <IconTrash />
                            Excluir
                        </button>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </S.Container>
    );
};

export default Item;