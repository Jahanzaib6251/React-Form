import '../App.css'
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState('')
    const handleChange = (e) => {
        setData(e.target.value)
    }
  return (
    <div className='container'>
        <h3>Videos</h3>
        <h1>Search Item : {data}</h1>
        <input type='txt'value={data} onChange={handleChange}></input>

    </div>
  )
}

export default Form