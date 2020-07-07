import React from 'react'

import { Card,InputBox } from '../../components'

const Forms = () => {
  return (
    <>
      <h1>Buscamos Emprendimientos</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur praesentium dolore quas, optio iusto accusantium neque et, quod maxime ea a omnis deleniti magni porro impedit maiores architecto officia libero.</p>
      <div>
        <Card />
        <form>
          <InputBox title="titulo" placeholder="placeholder" type="text" />
          <p>Provincia de distribución</p>
          <select name="provincias" placeholder="provincia">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <p>Descripción</p>
          <textarea placeholder="placeholder"></textarea> 
          <InputBox title="titulo" placeholder="placeholder" type="text" />
          <InputBox title="titulo" placeholder="placeholder" type="text" />
          <InputBox title="titulo" placeholder="placeholder" type="text" />
          <InputBox title="titulo" placeholder="placeholder" type="text" />
          <button>¡Registrar!</button>
        </form>
      </div>
    </>
  )
}

export default Forms