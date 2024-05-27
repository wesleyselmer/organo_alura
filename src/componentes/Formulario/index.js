import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarColaborador({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem, 
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do Colaborador</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterar={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
            />
            <CampoTexto 
                obrigatorio={false} 
                label="Imagem" 
                placeholder="Digite sua imagem"
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Time"
                items={props.times} 
                valor = {time}
                aoAlterar = {valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
        </form>
        <form onSubmit={(evento) => {
            evento.preventDefault()
            props.cadastrarTime({ nome: nomeTime, cor: corTime })
        }}>
            <h2>Preencha os dados para criar um novo time</h2>
            <CampoTexto 
                obrigatorio
                label="Nome" 
                placeholder="Digite o nome do Time"
                valor={nomeTime}
                aoAlterar={valor => setNomeTime(valor)}
            />
            <CampoTexto 
                obrigatorio
                label="Cor" 
                placeholder="Digite a cor do time"
                valor={corTime}
                aoAlterar={valor => setCorTime(valor)}
            />
            <Botao>
                Criar um novo Time
            </Botao>
        </form>
    </section>
)
}

export default Formulario