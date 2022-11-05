import React, { useState } from 'react';
import { 
    Grid,
    Input,
    Select
} from '@mantine/core';
import {
    IconSearch,
    IconCalendar,
    IconTimeline
} from '@tabler/icons';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import * as S from './style';
import { Button, Item } from '../../components';

const Despesas: React.FC = () => {

    const despesas: any = [
        { name: 'Água'},
        { name: 'Luz'},
        { name: 'Aluguél'},
        { name: 'Água'},
        { name: 'Luz'},
        { name: 'Aluguél'},
        { name: 'Água'},
        { name: 'Luz'},
        { name: 'Aluguél'},
    ];

    return (
        <S.Container>
            <h1>Receitas</h1>
            <Grid>
                <Grid.Col span={5}>
                    <Input 
                        placeholder='Pesquisar receita'
                        size="md"
                        icon={<IconSearch />}
                        width="300px"
                    />
                </Grid.Col>

                <Grid.Col span={3}>
                    <Select
                        icon={<IconTimeline />} 
                        data={[
                            { label: "Tudo", value: 'tudo' },
                            { label: "Dia", value: 'dia' },
                            { label: "Semana", value: 'semana' },
                            { label: "Mês", value: 'mes' },
                            { label: "Ano", value: 'ano' }
                        ]}
                        size="md"
                        placeholder='Pesquisa por...'
                    />
                </Grid.Col>
                <Grid.Col span={3}>
                    <DateRangePicker
                        placeholder="Pesquisar por data"
                        size="md"
                        icon={<IconCalendar />}
                    />
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button>
                        Limpar filtros
                    </Button>
                </Grid.Col>
            </Grid>
            
            <div style={{marginTop: '20px'}}>
                {despesas.map((id: any, index: number) => (
                    <Item 
                        type="despesas"
                        key={index}
                        name={id.name}                    
                    />
                ))}
            </div>
        </S.Container>
    )
}

export default Despesas;