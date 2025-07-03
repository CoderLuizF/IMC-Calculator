import React from 'react'

const ImcCalc = () => {
  return (
    <div id='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className="form-input">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name='height' id='height' placeholder='Exemplo: 1,80' />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name='weight' id='weight' placeholder='Exemplo: 80,5' />
                </div>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc