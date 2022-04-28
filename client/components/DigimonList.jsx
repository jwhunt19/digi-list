import React from 'react'
import PropTypes from 'prop-types'

const DigimonList = ({ digimon }) => {
  // setTimeout(() => { console.log(Array.isArray(digimon)) }, 1)

  return (
    <div className='digimon'>
      {
        digimon.map((digimon, i) => (
          <img key={i + digimon.name} src={digimon.img}></img>
        ))
      }
    </div>
  )
}

DigimonList.propTypes = {
  digimon: PropTypes.array.isRequired
}

export default DigimonList
