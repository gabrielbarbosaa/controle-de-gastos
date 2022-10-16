import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { api } from "../services";
import { IUser } from '../interfaces/IUser';

export const postUser = async (data: IUser) => {
    const resp = await api.post('/singup', data)

    return resp.data
};