import css from '../src/styles/Home.module.css'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import TestComponent from '@/components/test'
import Planet from '@/components/Planet'
import { Box, OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'
import Earth from '@/components/Earth'
import Sun from '@/components/Sun'
import Mercury from '@/components/Mercury'
import Mars from '@/components/Mars'

export default function App () {
  return (
    <div className={css.scene}>
    //     Hello world this is Trang's universe
        <Canvas
          camera={{position : [0,0,600]}}>
          <OrbitControls zoomSpeed={0.1}/>
          <ambientLight intensity={1} />
          <spotLight position={[30, 30, 10]} />
          <Stars count={10000} radius={100} speed={2}/>
          <Sun />
          <Earth />
          <Mars />
          <Mercury />
          {/* <TestComponent /> */}
      </Canvas>
    </div>
  )
}
