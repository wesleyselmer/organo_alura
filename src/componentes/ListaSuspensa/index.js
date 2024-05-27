import './ListaSuspensa.css'

const ListaSuspensa = ({label, obrigatorio, valor, items, aoAlterar}) => {
return (
    <div className='lista-suspensa'>
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterar(evento.target.value)}>
            <option value="">Escolha um time</option>
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
)
}

export default ListaSuspensa