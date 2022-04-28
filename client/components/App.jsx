import React, { useState, useEffect } from 'react'
import DigimonList from './DigimonList'
import axios from 'axios'

const App = () => {
  const [digimon, setDigimon] = useState([])

  useEffect(() => {
    getDigimon()
  }, [])

  async function getDigimon () {
    const { data } = await axios.get('/digimon')
    setDigimon(data)
  }

  function log () { // TEST FUNCTION - DELETE
    console.log(
      digimon
    )
  }

  return (
    <>
    <DigimonList digimon={digimon}/>
    <button onClick={log}>click me</button>
    </>
  )
}

export default App
