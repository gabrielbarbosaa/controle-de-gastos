import React, { useState } from 'react';
import * as S from './style';
import {
    Card, 
    Image,
    ButtonProps, 
    createPolymorphicComponent,
    Group,
    Button
} from '@mantine/core';
import { logo } from '../../assets';
import { Input } from '@mantine/core';
import { 
    IconAt,
    IconLock,
    IconLockOpen,
    IconEye,
    IconEyeOff
} from '@tabler/icons';

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const SignIn: React.FC = () => {
    const [ type, setType ] = useState<string>('password');
    return (
        <S.Container>
            <Card 
                shadow="lg" 
                radius="md"
                py={30}
                px={40}
            >
                <Card.Section>
                    <Group>
                        <Image 
                            width={40}
                            height={40}
                            src={logo}
                        />
                        <h2>Controle de gastos</h2>
                    </Group>
                </Card.Section>
                <Card.Section>
                    <h3>Entrar</h3>

                    <form>
                        <Input
                            icon={<IconAt width={20}/>}
                            placeholder="E-mail"
                            size="md"
                            mb={20}
                        />
                        <Input
                            icon={type === 'password' ? <IconLock width={20}/> : <IconLockOpen width={20}/>}
                            placeholder="Senha"
                            type={type}
                            size="md"
                            mb={20}
                            rightSection={
                                type === 'password' 
                                    ?   <Button
                                            type="button"
                                            onClick={() => setType('text')}
                                        >
                                            <IconEye/>
                                        </Button> 
                                    :   <Button
                                            type="button"
                                            onClick={() => setType('password')}
                                        >
                                            <IconEyeOff/>
                                        </Button>
                            }
                        />

                        <StyledButton 
                            variant='outline'
                            mb={15}
                            fullWidth
                        >
                            Entrar
                        </StyledButton>
                    </form>
                    <Group
                        grow
                        spacing='lg'
                    >
                        <S.CreateAcount
                            to="/sign-up"
                        >
                            Criar conta
                        </S.CreateAcount>
                        <S.RecoveryPassword
                            to=""
                        >
                            Recuperar senha
                        </S.RecoveryPassword>
                    </Group>
                </Card.Section>
            </Card>
        </S.Container>
    )
}

export default SignIn;