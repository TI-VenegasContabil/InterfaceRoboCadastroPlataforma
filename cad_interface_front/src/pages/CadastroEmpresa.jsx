import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect  } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./CadastroEmpresa.css"


const CadastroEmpresa = () =>{

    const [empresaCount, setEmpresaCount] = useState(null);
    const { register, handleSubmit } = useForm();
    const [atividadeInput, setAtividadeInput] = useState('');
    const [atividadesSecundarias, setAtividadesSecundarias] = useState([]);
    const navigate = useNavigate(); // Hook para navegação

    useEffect(()=>{
        fetch('/temp.json')
        .then((response)=>response.json())
        .then((data)=>{
            setEmpresaCount(data.InterpriseCounter)
        })
        .catch((error)=>{
            console.error("Erro ao carregar o contador de empresa",error)
        });
    },[]);

    const onSubmit = (data) => {
        console.log("Dados do formulário:", data);
        // Aqui você pode fazer um POST para uma API ou qualquer outra ação necessária
        const dadosComAtividades = {
            ...data,
            atividadeSecundaria: atividadesSecundarias
        };

        console.log("Dados do formulário:", dadosComAtividades);

        navigate("/cadastro_socio")
    };

    const handleAddAtividade = () => {
        if (atividadeInput.trim() !== '') {
            setAtividadesSecundarias([...atividadesSecundarias, atividadeInput.trim()]);
            setAtividadeInput('');
        }
    };
    
    const handleRemoveAtividade = (index) => {
        const novasAtividades = [...atividadesSecundarias];
        novasAtividades.splice(index, 1);
        setAtividadesSecundarias(novasAtividades);
    };
    



    return(

        <div className='main_cadastro_empresa'>

            <h1>Cadastro de Empresa</h1>

            <div className='enterpriseBlock'>

                <h2 className='empresaCounter'>Empresa: {empresaCount!==null ? empresaCount:'Carregando...'}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="form_empresa">

                    
                    <div className='form-item'>
                        <label htmlFor="cnpj">CPNJ: </label>
                        <input type="text" placeholder="CNPJ" name='cnpj' {...register("cnpj")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" placeholder="Nome" name='nome' {...register("nome")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="tipo_endereco">Tipo de Endereço: </label>
                        <input type="text" placeholder="Tipo de Endereço" name = 'tipo_endereco' {...register("tipoEndereco")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="numero">Numero: </label>
                        <input type="text" placeholder="Número" name='numero' {...register("numero")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="bairro">Bairro: </label>
                        <input type="text" placeholder="Bairro" name='bairro' {...register("bairro")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="complemento"> Complemento: </label>
                        <input type="text" placeholder="Complemento" name='complemento'{...register("complemento")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="municipio">Município:</label>
                        <input type="text" placeholder="Município" name='municipio' {...register("municipio")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="cep"> CEP: </label>
                        <input type="text" placeholder="CEP" name='cep' {...register("cep")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="ddd">DDD: </label>
                        <input type="text" placeholder="DDD" name='ddd' {...register("ddd")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="telefone">Telefone: </label>
                        <input type="text" placeholder="Telefone" name='telefone' {...register("telefone")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" placeholder="Email" name='email' {...register("email")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="natureza_juridica">Natureza Jurídica</label>
                        <input type="text" placeholder="Natureza Jurídica" name = 'natureza_juridica' {...register("naturezaJuridica")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="contador">Contador</label>
                        <input type="number" placeholder="3" name='contador' {...register("contador")} />
                    </div>

                    <div className='form-item'>
                        <label>Data de Inscrição Municipal:</label>
                        <input type="date" {...register("dataIM")} />
                    </div>

                    <div className='form-item'>
                        <label>Início da Atividade:</label>
                        <input type="date" {...register("inicioAtividade")} />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="cidade">Cidade: </label>
                        <input type="text" placeholder="Cidade" name='cidade' {...register("cidade")} />
                    </div>

                    <label>Atividades Secundárias:</label>
                    <div className="atividade-secundaria-container form-item">
                        <input
                            type="text"
                            placeholder="Digite uma atividade"
                            value={atividadeInput}
                            onChange={(e) => setAtividadeInput(e.target.value)}
                        />
                        <button type="button" onClick={handleAddAtividade}>Adicionar</button>
                    </div>

                    <ul className="atividade-lista">
                        {atividadesSecundarias.map((atividade, index) => (
                            <li key={index}>
                                {atividade}
                                <button type="button" onClick={() => handleRemoveAtividade(index)}>Remover</button>
                            </li>
                        ))}
                    </ul>

                    <button className = 'next-buttom' type="submit">Salvar Empresa</button>

                </form>
            </div>

        </div>


    );
}
export default CadastroEmpresa;