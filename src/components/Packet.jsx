import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Packet = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/packet.glb')
  return (
    <group {...props} dispose={null} scale={0.001} position={[0, -1, 0]}>
      <mesh
        geometry={nodes.Paper_bag_paper_Mat_0.geometry}
        material={materials.paper_Mat}
        scale={100}
      />
      <mesh
        geometry={nodes.Label_Material001_0.geometry}
        material={materials['Material.001']}
        scale={100}
      />
      <mesh
        geometry={nodes.Bendy_strip_plastic_Mat_0.geometry}
        material={materials.plastic_Mat}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/packet.glb')

export default Packet