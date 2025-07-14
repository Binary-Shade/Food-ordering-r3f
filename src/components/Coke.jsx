import React from 'react'

const Coke = (props) => {
  return (
    <mesh {...props} castShadow>
      <cylinderGeometry args={[0.5, 0.4, 2, 32]} />
      <meshStandardMaterial color="#c1121f" />
    </mesh>
  )
}

export default Coke