import { IBGE } from './../services/api/index';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ICity } from '../interfaces/ICity';


export const getCity = async (id: number):Promise<ICity []> => {
    const resp = await IBGE.get<ICity []>(`/v1/localidades/estados/${id}/municipios?orderBy=nome`)

    return resp.data
}

export const useCity = (id: number):UseQueryResult<ICity []> => {
    return useQuery(["city", id], () => getCity(id))
}