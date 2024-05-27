import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)}>
            {props.items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
)
}

export default ListaSuspensa