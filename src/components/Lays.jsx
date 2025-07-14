import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Lays = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/lays.glb')
  return (
    <group {...props} dispose={null} rotation={[Math.PI/2, 0, 0]} position={[0, -0.5, 0]}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.002']}
        position={[-0.005, 0.213, -0.083]}
        rotation={[-1.31, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/lays.glb')

export default Lays