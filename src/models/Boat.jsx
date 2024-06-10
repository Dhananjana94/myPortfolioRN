import {useState,useRef,useEffect} from 'react'
import boatScene from '../assets/3d/boat.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Boat = ({isRotating, ...props}) => {

    const ref = useRef();
    const {scene,animations} = useGLTF(boatScene);
    const{actions} = useAnimations(animations,ref);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // set larger screen

    //set animations
    useEffect(( )=>{
        if(isRotating){
            actions['Take 001'].play();
        }
        else{
            actions['Take 001'].stop();           
        }
    },[actions,isRotating])

    useEffect(( )=>{
        const handleResize = () =>{
            setIsLargeScreen(window.innerWidth > 768);
        }

        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    },[]);

    const position = isLargeScreen ?[4,-7.8,-25] : [5,-7,-35];
  return (
    <mesh {...props} ref={ref}
     position={position} scale={[0.004,0.004,0.004]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Boat