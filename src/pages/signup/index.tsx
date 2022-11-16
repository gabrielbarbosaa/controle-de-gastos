import React, { useState } from 'react';
import * as S from './style';
import { 
    Card,
    Group,
    Input,
    ButtonProps, 
    createPolymorphicComponent,
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
import { ModalMsgSuccess } from '../../components';
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { FormUser } from './type';
import { useMutation } from '@tanstack/react-query';
import { postUser } from '../../hooks/useUser';
import { schema } from './schema';

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const SignUp: React.FC = () => {
    const [ type, setType ] = useState<string>('password');
    const [ open, setOpen ] = useState<boolean>(false);
    let navigate = useNavigate ();

    const {
        handleSubmit,
        register,
        formState: { errors, isDirty, isValid }
    } = useForm<FormUser>({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const { mutate: newUser } = useMutation(postUser, {
        onSuccess: () => {
            setOpen(!open)
        },
    });

    const onSubmit = (data: FormUser) => {
        newUser(data)
    };

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
                            <Input.Wrapper
                                withAsterisk
                                label="Nome"
                                error={errors?.name?.message}
                                mb={20}
                            >
                                <Input 
                                    {...register('name')}
                                    placeholder="Nome"
                                    size="md"
                                    type="text"
                                />
                            </Input.Wrapper>
                            <Input.Wrapper
                                withAsterisk
                                label="Idade"
                                error={errors?.age?.message}
                                mb={20}
                            >
                                <Input 
                                    {...register('age')}
                                    placeholder="Idade"
                                    size="md"
                                    type="number"
                                />
                            </Input.Wrapper>
                        </Group>
                        <Group grow>
                            <Input.Wrapper
                                withAsterisk
                                label="Email"
                                error={errors?.email?.message}
                                mb={20}
                            >
                                <Input
                                    {...register('email')}
                                    icon={<IconAt width={20}/>}
                                    placeholder="E-mail"
                                    size="md"
                                />
                            </Input.Wrapper>
                            <Input.Wrapper
                                withAsterisk
                                label="Senha"
                                error={errors?.password?.message}
                                mb={20}
                            >
                                <Input
                                    {...register('password')}
                                    icon={type === 'password' ? <IconLock width={20}/> : <IconLockOpen width={20}/>}
                                    placeholder="Senha"
                                    type={type}
                                    size="md"
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
                            </Input.Wrapper>
                        </Group>
                        <Group
                            position="center" 
                        >
                            <StyledButton 
                                type='submit'
                                variant='outline'
                                mb={15}
                                px={30}
                                disabled={!isDirty || !isValid}
                            >
                                Cadastrar
                            </StyledButton>
                        </Group>
                    </form>
                </Card.Section>
            </Card>
            <ModalMsgSuccess 
                open={open}
                onClose={() => {
                    setOpen(!open)
                    navigate('/')
                }}
            />
        </S.Container>
    )
}

export default SignUp;