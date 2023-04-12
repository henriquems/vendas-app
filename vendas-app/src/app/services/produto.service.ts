import { httpClient } from "app/http";
import { Produto } from "../models/produtos";
import { AxiosResponse } from "axios"

const resouceUrl: string = "/api/produtos"

export const useProdutoService = () => {
    
    const salvar = async (produto: Produto): Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resouceUrl, produto)
        return response.data
    }
    
    const atualizar = async (produto: Produto): Promise<void> => {
        const url: string = `${resouceUrl}/${produto.id}`
        await httpClient.put<Produto>(url, produto);
    }



    return {
        salvar,
        atualizar
    }
}