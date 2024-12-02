import React, { useState } from 'react'

export default function Prueba() {
  const [disable, setDisable] = useState(false)
  return (
   
    <div>
      <button onClick={()=> setDisable(!disable)}>jelou</button>

      {
        disable ? <p>disabled</p> : <p>enabled</p>
      }
      
    </div>
  )
}
