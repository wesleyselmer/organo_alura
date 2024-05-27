import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoAdicionarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColaborador={colaborador => aoAdicionarColaborador(colaborador)}/>
    </div>
  );
}

export default App;
