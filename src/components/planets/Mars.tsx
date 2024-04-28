import Planet from "./Planet";
import { Text, useCursor } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Card from "../Card";
import Brex from "../Projects/Brex";
import PersonalWebsite from "../Projects/PersonalWebsite";
import Wikicredibility from "../Projects/Wikicredibility";
import Button from "../Button";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	const handleViewResume = () => {
		window.open(
			"https://drive.google.com/file/d/1Wxli3bgxoxnHO2s2kxyZwmT8-EeCiIB4/view?usp=sharing",
			"_blank"
		);
	};
	const [hovered, setHovered] = useState(false);
	useCursor(hovered);
	return (
		<>
			<Planet
				position={[6, 0, 80]}
				meshMaterialPath="/mars.jpeg"
				spinSpeed={0.002}
				size={10}
			/>
			<Text
				color={"white"}
				position={[-11, 0, 80]}
				font="/fonts/futura_medium.ttf"
				lineHeight={1.2}
				fontSize={1.2}
				maxWidth={14}
				textAlign="left"
				onClick={handleViewResume}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				My engineering projects are out of this world. Here are some
				selected work. You can view my resume here.
			</Text>
			{/* <Card
				position={[25, 8, 80]}
				text="Brex"
				cardSize={[10, 6]}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Brex}
			/> */}
			<Button
				position={[18, 5, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				text="Brex                                ➜"
				textXOffset={5.1}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Brex}
			/>
			<Button
				position={[18, -1, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				text="Wikicredibility                  ➜"
				textXOffset={5.1}
				textYOffset={0.1}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Wikicredibility}
			/>
			<Button
				position={[18, -7, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				text="This website                     ➜"
				textXOffset={5.1}
				textYOffset={-0.1}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={PersonalWebsite}
			/>
		</>
	);
};

export default Mars;
