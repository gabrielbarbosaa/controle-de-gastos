import React, { useState } from 'react';
import * as S from './style';
import { 
    Card,
    Group,
    Input,
    ButtonProps, 
    createPolymorphicComponent,
    Select,
    Button
} from '@mantine/core';
import { 
    IconArrowLeft,
    IconAt,
    IconLock,
    IconLockOpen,
    IconEye,
    IconEyeOff
} from '@tabler/icons';

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const SignUp: React.FC = () => {
    const [ type, setType ] = useState<string>('password');
    return (
        <S.Container>
            <Card
                shadow="lg" 
                radius="md"
                py={30}
                px={30}
            >
                <Card.Section mb={20}>
                    <Group align='center' position='center'>
                        <S.BackButton to="/">
                            <IconArrowLeft/>
                        </S.BackButton>
                        <h2>Criar conta</h2>
                    </Group>
                </Card.Section>
                <Card.Section>
                    <form>
                        <Group>
                            <Input
                                placeholder="Nome"
                                size="md"
                                mb={20}
                                type="text"
                            />
                            <Input
                                placeholder="Sobrenome"
                                size="md"
                                mb={20}
                                type="text"
                            />
                            <Input
                                placeholder="Idade"
                                size="md"
                                mb={20}
                                type="number"
                            />
                        </Group>
                        <Group grow>
                            <Select 
                                data={['RS', 'RJ', 'SP']}
                                size="md"
                                mb={20}
                                placeholder="Estado"
                                searchable
                                dropdownPosition="bottom"
                            />
                            <Select 
                                data={['Porto Alegre', 'Rio de janeiro', 'São Paulo']}
                                size="md"
                                mb={20}
                                placeholder="Cidade"
                                searchable
                                dropdownPosition="bottom"
                            />
                        </Group>
                        <Group grow>
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
                        </Group>
                        <Group
                            position="center" 
                        >
                            <StyledButton 
                                variant='outline'
                                mb={15}
                                px={30}
                            >
                                Cadastrar
                            </StyledButton>
                        </Group>
                    </form>
                </Card.Section>
            </Card>
        </S.Container>
    )
}

export default SignUp;