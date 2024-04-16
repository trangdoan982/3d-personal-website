import Planet from "./Planet";
import { Text, useCursor } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Card from "../Card";
import Brex from "../Projects/Brex";
import PersonalWebsite from "../Projects/PersonalWebsite";
import Wikicredibility from "../Projects/Wikicredibility";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	const handleViewResume = () => {
		window.open(
			"https://drive.google.com/file/d/1Wxli3bgxoxnHO2s2kxyZwmT8-EeCiIB4/view?usp=sharing"
		);
	};
	const [hovered, setHovered] = useState(false);
	useCursor(hovered);
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
				position={[-11, 0, 150]}
				font="/spaceFont.ttf"
				maxWidth={10}
				textAlign="left"
				onClick={handleViewResume}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				My engineering projects are out of this world. Here are some
				selected work. You can view my resume here.
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
