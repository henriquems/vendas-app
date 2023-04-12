import { Produto } from '@/app/models/produtos'
import { useProdutoService } from '@/app/services'
import { Input, Layout, Message } from 'components'
import { useState } from 'react'

export const CadastroProdutos: React.FC = () => {
    
    const service = useProdutoService()
    
    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [id, setId] = useState<number>()
    const [cadastro, setCadastro] = useState<string>()

    const submit = () => {
        const produto: Produto = {
            id,
            sku, 
            preco: parseFloat(preco), 
            nome, 
            descricao
        }

        if(id){
            service.atualizar(produto)
                .then(response => console.log('atualizado'))
        } else {
            service.salvar(produto)
                .then(produtoResposta => {
                    setId(produtoResposta.id)
                    setCadastro(produtoResposta.cadastro)
            })
        }            
    } 

    return(
        <Layout titulo="Cadastro de Produtos">
            
            <Message texto="Produto atualizado com sucesso" tipo='success' />
            
            {id &&
                <div className='columns'>
                    <Input 
                        columnClasses='is-half' 
                        value={id}
                        label='Código: *' 
                        id='inputId'
                        disabled
                    />

                    <Input 
                        columnClasses='is-half' 
                        value={cadastro}
                        label='Data Cadastro: *' 
                        id='inputDataCadastro'
                        disabled
                    />
                </div>
            }
            
            <div className='columns'>
                <Input 
                    columnClasses='is-half' 
                    label='SKU: *' 
                    onChange={setSku} 
                    id='inputSku'
                    placeholder='Digite o SKU do produto'
                />

                <Input 
                    columnClasses='is-half' 
                    label='Preço: *' 
                    onChange={setPreco} 
                    id='inputPreco'
                    placeholder='Digite o preço do produto'
                    currency
                    maxLength={16}
                />
            </div>

            <div className='columns'>
                <Input 
                    columnClasses='is-full' 
                    label='Nome: *' 
                    onChange={setNome} 
                    id='inputNome'
                    placeholder='Digite o nome do produto'
                />
            </div>
            
            <div className='columns'>
                <div className='field column is-full'>
                    <label className='label' htmlFor='inputDescricao'>Descrição: *</label>
                    <div className='control'>
                        <textarea id='inputDescricao' 
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)}
                            className='textarea' 
                            placeholder='Digite a descrição do produto' />
                    </div>
                </div>
            </div>

            <div className='field is-grouped'>
                <div className='control'>
                    <button onClick={submit} className='button'>
                        {id ? 'Atualizar' : 'Salvar'}
                    </button>
                </div>
                <div className='control'>
                    <button className='button'>Voltar</button>
                </div>
            </div>
        </Layout>
    )
}

