import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css' 

const Time = ({id, nome, cor, colaboradores, aoDeletar, mudarCor}) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(cor, '0.6') }}>
            <input onChange={evento => mudarCor(evento.target.value, id)} type='color' className='input-cor' value={cor} />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                    return <Colaborador 
                    key={colaborador.nome}
                    id={colaborador.id}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corDeFundo={cor} 
                    aoDeletar={aoDeletar}
                />})}
            </div>
        </section>
    )
}

export default Time