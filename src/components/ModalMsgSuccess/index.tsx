import React from 'react';
import * as S from './style';
import { Modal } from '@mantine/core';
import {
    IconCheck
} from '@tabler/icons';
import Button from '../Button';

interface IProps {
    open: boolean,
    onClose: () => void
}

const ModalMsgSuccess: React.FC <IProps> = ({open, onClose}) => {
    return (
        <Modal
            overlayOpacity={0.55}
            overlayBlur={3} 
            centered 
            opened={open} 
            onClose={onClose}        
        >
            <S.Container>
                <figure>
                    <IconCheck />
                </figure>
                <h1>Conta criada com sucesso</h1>
                <Button
                    onClick={onClose}
                >
                    Fechar
                </Button>
            </S.Container>
      </Modal>
    );
};

export default ModalMsgSuccess;