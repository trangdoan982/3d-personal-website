import Planet from "./Planet";
import { Text } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Projects from "../Projects";
import Card from "../Card";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	return (
		<>
			<Planet
				position={[0, 0, 150]}
				meshMaterialPath="/mars.jpeg"
				spinSpeed={0.002}
				size={2}
			/>
			<Text
				color={"white"}
				position={[-5, 0, 150]}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
			>
				This is the Mars, where I flex about my projects
			</Text>
			<Card
				position={[7, 5, 150]}
				text="Brex"
				size={[6, 3]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Projects}
			/>
			<Card
				position={[7, 0, 150]}
				text="Wikicredibility"
				size={[6, 3]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Projects}
			/>
			<Card
				position={[7, -5, 150]}
				text="This website"
				size={[6, 3]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Projects}
			/>
		</>
	);
};

export default Mars;
