import css from "@/styles/Home.module.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import Earth from "@/components/Earth";
import Sun from "@/components/Sun";
import Mercury from "@/components/Mercury";
import Mars from "@/components/Mars";
import { ChakraProvider } from "@chakra-ui/react";
import DynamicNav from "@/components/DynamicNav";

export default function App() {
	return (
		<ChakraProvider>
			{/* <NavBar /> */}
			<div className={css.scene}>
				<Canvas>
					<PerspectiveCamera makeDefault position={[0, 0, 500]} />
					<DynamicNav />
					<OrbitControls zoomSpeed={0.1} />
					<ambientLight intensity={0.2} />
					<spotLight position={[30, 30, 10]} />
					<Stars
						count={10000}
						radius={100}
						speed={2}
						factor={6}
						fade={true}
					/>
					<Sun />
					<Mars />
					<Earth />
					<Mercury />
				</Canvas>
			</div>
		</ChakraProvider>
	);
}
