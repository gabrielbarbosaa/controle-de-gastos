import { api } from "../services";
import { IAuthorize, IUserAuth } from '../interfaces/IAuthorize';

export const useAuthorize = async (data: IAuthorize):Promise<IUserAuth> => {
    const resp = await api.post<IUserAuth>('/authorize', data)
    return resp.data;
}