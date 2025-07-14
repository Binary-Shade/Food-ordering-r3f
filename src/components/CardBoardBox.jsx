import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const CardBoardBox = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/cardboard.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.556, 0.488]} rotation={[-2.88, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_0}
          position={[0, -0.569, -0.488]}
        />
      </group>
      <group position={[0, 0.556, -0.488]} rotation={[2.88, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.material_0}
          position={[0, -0.569, 0.488]}
        />
      </group>
      <group position={[-0.363, 0.563, 0.013]} rotation={[0, 0, -2.88]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_0}
          position={[0.363, -0.563, -0.013]}
        />
      </group>
      <group position={[0.363, 0.563, 0.013]} rotation={[0, 0, 2.88]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.material_0}
          position={[-0.363, -0.563, -0.013]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.material_0}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/cardboard.glb')

export default CardBoardBox
