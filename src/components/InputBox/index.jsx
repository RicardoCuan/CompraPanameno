import React from 'react'

const InputBox = ({ title, placeholder, type }) => {
  return (
    <div>
      <p>{title}</p>
      <input type={type} name="name" placeholder={placeholder} />
    </div>
  )
}

export default InputBox