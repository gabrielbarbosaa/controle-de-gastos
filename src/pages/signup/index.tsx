import React, { useEffect, useState } from 'react';
import * as S from './style';
import { 
    Card,
    Group,
    Input,
    ButtonProps, 
    createPolymorphicComponent,
    Select,
    Button,
    NumberInput
} from '@mantine/core';
import { 
    IconArrowLeft,
    IconAt,
    IconLock,
    IconLockOpen,
    IconEye,
    IconEyeOff
} from '@tabler/icons';
import { useCity, useUf } from '../../hooks';
import { IUf } from '../../interfaces/IUf';
import { ICity } from '../../interfaces/ICity';
import { useForm, Controller } from 'react-hook-form';
import { FormUser } from './type';
import { useMutation } from '@tanstack/react-query';
import { postUser } from '../../hooks/useUser';

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const SignUp: React.FC = () => {
    const [ type, setType ] = useState<string>('password');
    const [ uf, setUf ] = useState([]);
    const [ city, setCity ] = useState([]);
    const [ idState, setIdState ] = useState(0);
    const { data: listUf } = useUf();
    const { data: listCity } = useCity(idState);

    const {
        handleSubmit,
        register,
        control
    } = useForm<FormUser>();

    const { mutate: newUser } = useMutation(postUser);

    const onSubmit = (data: FormUser) => {
        newUser(data)
    };

    useEffect(() => {
        const aux:any = [];

        listUf?.forEach((state: IUf) => {
            aux.push({
                value: state.id,
                label: state.nome
            })
        })
        setUf(aux)

    }, [listUf]);

    useEffect(() => {
        const aux:any = [];

        listCity?.forEach((state: ICity) => {
            aux.push({
                value: state.id,
                label: state.nome
            })
        })
        setCity(aux)

    }, [listCity, idState]);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Group grow>
                            <Input
                                {...register('name')}
                                placeholder="Nome"
                                size="md"
                                mb={20}
                                type="text"
                            />
                            <Input
                                placeholder="Idade"
                                size="md"
                                mb={20}
                                type="number"
                                {...register('age')}
                            />
                        </Group>
                        <Group grow>
                            <Select  
                                {...register('state')}
                                searchable
                                size="md"
                                mb={20}
                                placeholder='Estado'
                                data={uf}
                                dropdownPosition="bottom"
                                onChange={(e: any) => {
                                    setIdState(e)
                                }}
                            />
                            <Controller 
                                name='city'
                                control={control}
                                render={({field: { onChange, value }})=> (
                                    <Select  
                                        searchable
                                        size="md"
                                        mb={20}
                                        placeholder='Cidade'
                                        data={city}
                                        dropdownPosition="bottom"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                        </Group>
                        <Group grow>
                            <Input
                                {...register('email')}
                                icon={<IconAt width={20}/>}
                                placeholder="E-mail"
                                size="md"
                                mb={20}
                            />
                            <Input
                                {...register('password')}
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
                                type='submit'
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