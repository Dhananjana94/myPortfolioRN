import { useRef, useEffect } from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import {MathUtils} from 'three';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  console.log(animations);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);
  const targetRotationY = useRef(0);

  useEffect(() => {
    actions['ArmatureAction.006'].play();
  }, []);

  useFrame(({ clock, camera }) => {

    //updat y position of bird simulate moving like sin wave

    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    //first check bird reached a certain end point and rotate bird 
    console.log(camera.position.x);
    console.log(birdRef.current.position.x);
    if (birdRef.current.position.x < camera.position.x - 10) {
      console.log('bird reached end point');
      birdRef.current.rotation.y = Math.PI;

      console.log('bird current rotation 2 ----------------' + birdRef.current.rotation.y);
    }
    else if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = 0;
    }

    // Smoothly interpolate bird's rotation towards the target rotation
    // birdRef.current.rotation.y = MathUtils.lerp(
    //   birdRef.current.rotation.y,
    //   targetRotationY.current,
    //   0.1 // Adjust this value to control the smoothness of the rotation
    // );
    //update x and z position based on direction

    if (birdRef.current.rotation.y === 0) {

      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z -= 0.01;

    }
    else {
      //   //moving backwards
      // birdRef.current.position.x -= 0.01;
      // birdRef.current.position.z -= 0.01;
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z += 0.01;

    }

  })

  return (
    <mesh position={[5, 2, 1]} scale={[0.5, 0.5, 0.5]}
      ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird 