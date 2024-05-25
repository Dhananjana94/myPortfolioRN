import React from 'react'

import ballonScene from '../assets/3d/balloon.glb';
import { useGLTF } from '@react-three/drei';

const Balloon = ({isRotating, ...props}) => {

    const {scene,animations} = useGLTF(ballonScene);

  return (
    <mesh {...props}
     position={[3,0.2,-1]} scale={[0.03,0.03,0.03]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Balloon