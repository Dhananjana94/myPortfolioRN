import React from 'react'

import ballonScene from '../assets/3d/balloon.glb';
import { useGLTF } from '@react-three/drei';

const Balloon = ({isRotating, ...props}) => {

    const {scene,animations} = useGLTF(ballonScene);

  return (
    <mesh {...props}
     position={[1,0.5,2]} 
     scale={[0.05,0.05,0.05]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Balloon