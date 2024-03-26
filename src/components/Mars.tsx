import Planet from "./Planet";
import { Text } from "@react-three/drei";
import { useState } from "react";
import Projects from "./projects";

const Mars = () => {
	const [showOverlay, setShowOverlay] = useState(false);

	const toggleOverlay = () => {
		setShowOverlay(!showOverlay);
	};

	return (
		<>
			<Planet
				position={[0, 0, 150]}
				meshMaterialPath="/mars.jpeg"
				spinSpeed={0.002}
				size={2}
				route="/projects"
			/>
			<Text
				color={"white"}
				position={[-5, 0, 150]}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
				onClick={toggleOverlay}
			>
				This is the Mars, where I flex about my projects
			</Text>
			{showOverlay && <Projects onClose={toggleOverlay} />}
		</>
	);
};

export default Mars;
