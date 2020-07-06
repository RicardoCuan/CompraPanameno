import React from 'react'


const Cat = ({cover, text}) => {
  
  return (
    <div>
      <div>
        <img src={cover} />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Cat
