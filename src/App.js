import React, { useState, useEffect } from 'react';
import InputNumber from 'react-input-number';

import './style.css';

export default function App() {
  const [valor1, setValor1] = useState(0.0);
  const [valor2, setValor2] = useState(0.0);
  const [valor3, setValor3] = useState(0.0);
  const [result4, setResult4] = useState(0.0);

  const regValor1 = e => {
    const v1 = parseFloat(e.target.value);
    v1.toFixed(2);
    setValor1(v1);
  };

  const regValor2 = e => {
    const v2 = parseFloat(e.target.value);
    // const reg = /({\d}3)/
    // v2.replace(reg, )
    console.log(v2);
    setValor2(v2.toFixed(2));
    console.log(valor2);
  };

  const regValor3 = e => {
    const v3 = parseFloat(e.target.value);
    v3.toFixed(2);
    setValor3(v3);
  };

  useEffect(() => {
    const divisResult = valor2 * valor3;
    const soma = divisResult / valor1;

    setResult4(parseFloat(soma));
  });

  return (
    <>
      <span>Qual ingrediente usou?</span>
      <input />
      <br />
      <span>Quantidade que comprou?</span>
      <span />
      <input
        name="quantity"
        type="range"
        min="0"
        max="1000"
        value={valor1}
        onChange={regValor1}
      />
      <span>{valor1}g</span>
      <br />
      <span>Quanto pagou nessa quantidade?</span>
      <input
        name="inp2"
        type="number"
        min="0"
        max="500"
        value={valor2}
        onChange={regValor2}
      />
      <br />
      <span>Quantidade que usou na receita?</span>
      <input name="inp3" type="number" onChange={regValor3} />

      <br />
      <span>Custo da quantidade que usou foi R${result4}</span>

      <br />
    </>
  );
}
