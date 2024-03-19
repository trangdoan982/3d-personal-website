import css from "@/styles/Home.module.css"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Text, Plane } from '@react-three/drei'
import Earth from '@/components/Earth'
import Sun from '@/components/Sun'
import Mercury from '@/components/Mercury'
import Mars from '@/components/Mars'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'

export default function App () {
  return (
    <ChakraProvider>
      <NavBar />
      <div className={css.scene}>
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