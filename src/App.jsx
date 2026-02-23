import { useState } from 'react';

import Medidas from './components/FormularioImc';
import Classifica from './components/Classifica';

function App() {
  const [imc, setImc] = useState(null);
  
  const renderizaImc = (peso, altura) => {
    const calcImc = (peso / (altura * altura))
    setImc(calcImc.toFixed(2))
  }

  return(
    <>
      <div className="container">
        <div>
          <h1 className='tittle'>Calculadora IMC</h1>
          <h2>Índice de Massa corporal</h2>
        </div>
        <Medidas  renderizaImc={renderizaImc} imc={imc}/>
        <Classifica imc = {imc}/>
      </div>
    
    </>
  )

}

export default App
