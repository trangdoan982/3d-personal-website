import css from "@/styles/Home.module.css"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Text, Plane, PerspectiveCamera} from '@react-three/drei'
import Earth from '@/components/Earth'
import Sun from '@/components/Sun'
import Mercury from '@/components/Mercury'
import Mars from '@/components/Mars'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import { useRef } from "react"

export default function App () {
  // const cameraRef = useRef(); // Ref to access the camera

  // /// Function to handle camera movement to position 1
  // const handlePosition1 = () => {
  //   if (cameraRef.current) {
  //     cameraRef.current.position.set(0, 0, 10); // Set camera position to desired position 1
  //   }
  // };

  // // Function to handle camera movement to position 2
  // const handlePosition2 = () => {
  //   if (cameraRef.current) {
  //     cameraRef.current.position.set(5, 5, 5); // Set camera position to desired position 2
  //   }
  // };

  return (
    <ChakraProvider>
      <NavBar />
      <div className={css.scene}>
        <div style={{color: "white"}}>Hi there </div>

        <Canvas
          camera={{position : [0,0,600]}}>
          <OrbitControls zoomSpeed={0.1}/>
          <ambientLight intensity={0.2} />
          <spotLight position={[30, 30, 10]} />
          <Stars count={10000} radius={100} speed={2} factor={6} fade={true}/>
          <Text position={[0,0,594]} fontSize={0.6}> Welcome to Trang Doan's space
          </Text> 
          <Text position={[0,-1,594]} fontSize={0.3}> scroll to explore
          </Text>
          <Text position={[0,-2,594]} fontSize={0.2}>drag for fun
          </Text>
          <Plane args={[200,200]} position={[0,0,580]}> 
            <meshBasicMaterial attach="material" color="black" transparent opacity={0.7} />
          </Plane>
          <Sun />
          <Mars />
          <Earth />
          <Mercury />
      </Canvas>
    </div>
    </ChakraProvider>
  )
}