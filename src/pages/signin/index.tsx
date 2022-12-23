import React, { useState, useContext } from 'react';
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
    IconEyeOff,
    IconArrowLeft,
    IconArrowRight
} from '@tabler/icons';
import { useForm } from 'react-hook-form';
import { FormAuth } from './type';
import { useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Carousel } from '@mantine/carousel';
import Particles from 'react-particles';
import { loadFull,  } from "tsparticles";

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const SignIn: React.FC = () => {
    const [ type, setType ] = useState<string>('password');
    const [ initi, setInit ] = useState<any>();
    const [ load, setLoad ] = useState<any>();
    const context = useContext(AuthContext);
    let navigate = useNavigate ();

    const { handleSubmit, register } = useForm<FormAuth>();
    console.log(context)

    const onSubmit = (data: FormAuth) => { 
        context.postAuthorize(data)
    };

    return (
        <S.Container>
            <div className="container-card">
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

                        <form onSubmit={handleSubmit(onSubmit)}>
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

                            <StyledButton 
                                type='submit'
                                variant='outline'
                                mb={15}
                                fullWidth
                                onClick={() => {
                                    if(context.signed === true){
                                        navigate('/dashboard')
                                    }
                                }}
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
            </div>
            <div className="content">
                <Particles
                    id="tsparticles"
                    init={(e) => {
                        return loadFull(e)
                    }}
                    options={{
                        background: {
                            color: {
                                value: "none",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                        style: {
                            width: '100%',
                            height: '100vh',
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            zIndex: '-999'
                        }
                    }}
                />
                <Carousel
                    mx="auto"
                    loop
                    withIndicators
                    height={200}
                    previousControlIcon={<IconArrowLeft color="#FFF"/>}
                    nextControlIcon={<IconArrowRight color="#FFF"/>}
                    sx={(theme) => ({ 
                        width: 420,
                        '.mantine-Carousel-control': {
                            backgroundColor: theme.colors.black[0],
                            border: 'none',
                            width: 30,
                            height: 30
                        }
                    })}
                    styles={{
                        indicator: {
                        width: 12,
                        height: 4,
                        zIndex: 99,
                        transition: 'width 250ms ease',

                            '&[data-active]': {
                                width: 40,
                            }
                        },
                    }}
                >
                    <Carousel.Slide>1</Carousel.Slide>
                    <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide>
                </Carousel>
            </div>
        </S.Container>
    );
};

export default SignIn;