import { IBGE } from "../services";
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IUf } from "../interfaces/IUf";

const getUf = async ():Promise<IUf []> => {
    const resp = await IBGE.get<IUf []>('v1/localidades/estados?orderBy=nome')

    return resp.data
}

export const useUf = <T>(): UseQueryResult<IUf []> => {
    return useQuery(["uf"], () => getUf())
}