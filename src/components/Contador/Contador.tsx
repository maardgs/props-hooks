import { useState } from 'react';
import './Contador.css'

function Contador() {
  //variável
  //let valor: number = 0;

  //variável de Estado
const [valor, setValor] = useState<number>(0);


//função
function somarMaisUm(){
  setValor(valor +1);
}

console.log(valor);

  return (
    <div className="container">
        <p>O valor é: { valor }</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador