import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Juice = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/juice.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.M_Juice}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/juice.glb')

export default Juice;