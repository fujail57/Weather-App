import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onClick} style={{color:"white"}}>{props.value}</button>
    </div>
  )
}

export default Button