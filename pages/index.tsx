import css from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Stars,
	PerspectiveCamera,
	Box,
} from "@react-three/drei";
import Earth from "@/components/planets/Earth";
import Sun from "@/components/planets/Sun";
import Mercury from "@/components/planets/Mercury";
import Mars from "@/components/planets/Mars";
import { ChakraProvider } from "@chakra-ui/react";
import DynamicNav from "@/components/DynamicNav";

interface ToggleOrbitControlsProps {
	enabled: boolean;
}
const ToggleOrbitControls: React.FC<ToggleOrbitControlsProps> = ({
	enabled,
}) => {
	const controlsRef = useRef<any>(null);

	// Update controls' enabled state
	useEffect(() => {
		controlsRef.current.enabled = enabled;
	}, [enabled]);

	return (
		<OrbitControls zoomSpeed={0.1} enablePan={false} ref={controlsRef} />
	);
};

export default function App() {
	const [controlsEnabled, setControlsEnabled] = useState(true);

	// Toggle controls' enabled state
	const handleClick = () => {
		setControlsEnabled(!controlsEnabled);
	};

	return (
		<ChakraProvider>
			<div className={css.scene}>
				<Canvas>
					<PerspectiveCamera makeDefault position={[0, 0, 500]} />
					{controlsEnabled ? <DynamicNav /> : null}
					<ToggleOrbitControls enabled={controlsEnabled} />

					<ambientLight intensity={0.2} />
					<spotLight position={[30, 30, 10]} />
					<Stars
						count={10000}
						radius={100}
						speed={2}
						factor={8}
						fade={true}
					/>
					<Sun />
					<Mars setControlsEnabled={setControlsEnabled} />
					<Earth setControlsEnabled={setControlsEnabled} />
					<Mercury setControlsEnabled={setControlsEnabled} />
				</Canvas>
			</div>
		</ChakraProvider>
	);
}
