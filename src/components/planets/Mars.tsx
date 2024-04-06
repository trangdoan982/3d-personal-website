import Planet from "./Planet";
import { Text } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Card from "../Card";
import Brex from "../Projects/Brex";
import PersonalWebsite from "../Projects/PersonalWebsite";
import Wikicredibility from "../Projects/Wikicredibility";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	return (
		<>
			<Planet
				position={[5, 0, 150]}
				meshMaterialPath="/mars.jpeg"
				spinSpeed={0.002}
				size={10}
			/>
			<Text
				color={"white"}
				position={[-10, 0, 150]}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
			>
				This is the Mars, where I flex about my projects
			</Text>
			<Card
				position={[25, 8, 150]}
				text="Brex"
				cardSize={[10, 6]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Brex}
			/>
			<Card
				position={[25, 0, 150]}
				text="Wikicredibility"
				cardSize={[10, 6]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Wikicredibility}
			/>
			<Card
				position={[25, -8, 150]}
				text="This website"
				cardSize={[10, 6]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={PersonalWebsite}
			/>
		</>
	);
};

export default Mars;
