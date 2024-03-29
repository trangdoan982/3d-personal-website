import Planet from "./Planet";
import { Text } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Projects from "../Projects";
import Card from "../Card";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	const close = () => {
		setShowOverlay(!showOverlay);
		setControlsEnabled(true);
	};

	const open = () => {
		setShowOverlay(!showOverlay);
		setControlsEnabled(false);
	};

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
				onClick={open}
			>
				This is the Mars, where I flex about my projects
			</Text>
			<Card position={[5, 0, 150]} text="brex" />
			{showOverlay && <Projects onClose={close} />}
		</>
	);
};

export default Mars;
