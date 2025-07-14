import React from 'react'
import { useGLTF } from '@react-three/drei'

const Burger = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/burger.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.02} position={[0, -0.9, 0]}>
        <group position={[0.216, 53.165, -0.679]} rotation={[-Math.PI / 2, 0.025, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Sesame_10_-_Default_0'].geometry}
            material={materials['10_-_Default']}
            position={[149.74, 27.302, -49.332]}
          />
        </group>
        <group position={[-0.339, 28.389, 0.298]} rotation={[-1.536, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['cheef_05_-_Default_0'].geometry}
            material={materials['05_-_Default']}
            position={[150.295, 28.279, -24.234]}
          />
        </group>
        <group position={[-0.121, 15.799, 0.262]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[150.077, 28.242, 10.01]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Object001_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Object001_02_-_Default_0_1'].geometry}
              material={materials['02_-_Default_0']}
            />
          </group>
        </group>
        <group position={[-0.093, 6.671, 0.219]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['bread_base_12_-_Default_0'].geometry}
            material={materials['12_-_Default']}
            position={[150.049, 28.199, 19.138]}
          />
        </group>
        <group position={[-0.246, 24.372, 0.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['beef_Material_#6_0'].geometry}
            material={materials.Material_6}
            position={[150.202, 28.265, -20.217]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sphere001_12_-_Default_0'].geometry}
          material={materials['12_-_Default']}
          position={[-0.71, 30.152, 0.36]}
          rotation={[-Math.PI / 2, 0.025, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Group58080_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/burger.glb')

export default Burger;