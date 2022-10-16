import { api } from "../services";
import { IAuthorize } from '../interfaces/IAuthorize';
import { useQuery } from "@tanstack/react-query";

export const useAuthorize = (data: IAuthorize) => {
    const resp = api.post<IAuthorize>('/authorize', data)

    return resp;
}