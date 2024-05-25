import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Balloon from '../models/Balloon'
import Boat from '../models/Boat'
{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          Popup
        </div> */}

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)


  //adjustIslandForScreen make island sceen match for all screens
  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -8, -40] // adjust positioning the model inside the screen
    let rotation = [0.1, 4.7, 0.06];
    //used to check if the width of the browser's viewport
    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];

    }
    else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandrotation] = adjustIslandForScreen();

  const adjustBaloonForScreen = () => {
    let screenScale, screenPosition;

    //used to check if the width of the browser's viewport
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]

    }
    else {
      screenScale = [3, 3, 3]; // for large pixel screen 
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition];
  }
  const [baloonScale, baloonPosition] = adjustBaloonForScreen();

  const adjustBoatForScreen = () => {
    let screenScale, screenPosition;

    //used to check if the width of the browser's viewport
    if (window.innerWidth < 768) {
      screenScale = [1,1,1];
      screenPosition = [0, -1, 0]

    }
    else {
      screenScale = [3, 3, 3]; // for large pixel screen 
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition];
  }
  const [boatScale, boatPosition] = adjustBoatForScreen();

  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} //enable cursor grabbing
        camera={{ near: 0.1, far: 1000 }}
      >

        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[3, 2, 1]}
            intensity={1.5}
          />
          <ambientLight
            intensity={0.2}
          />

          <hemisphereLight
            skyColor="#6DC5D1"
            groundColor={"#000000"}
            intensity={1}
          />


          <Bird />

          <Sky
            isRotating={isRotating} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandrotation}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
          />

          <Balloon

            isRotating={isRotating}
            baloonScale={baloonScale}
            baloonPosition={baloonPosition}
            rotation={[0, 20, 0]}

          />

          <Boat

            isRotating={isRotating}
            baloonScale={boatScale}
            baloonPosition={boatPosition}
            rotation={[0, 20.5, 0]}

          />
        </Suspense>

      </Canvas>
    </section>

  )
}

export default Home