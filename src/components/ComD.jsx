import React, { useContext } from 'react'
import { userContext } from './App'

export default function ComD() {
    const{name}=useContext(userContext)
  return (
    <div>
      <h1>Component 5</h1>
      <h3>Hi {name} again, are you in Agra</h3>
    </div>
  )
}
