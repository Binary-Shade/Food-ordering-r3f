import React from 'react'
import { useGLTF } from '@react-three/drei'

const Fries = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/fries.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.002} position={[0, -0.8, 0]} >
        <group position={[-406.298, 0, 1028.141]} rotation={[-Math.PI / 2, 0, 0]} scale={6.437}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/fries.glb')

export default Fries
