import Planet from "./Planet";
import { Text } from "@react-three/drei";
import Card from "../Card";
import { Dispatch, SetStateAction } from "react";

interface EarthProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Earth: React.FC<EarthProps> = ({ setControlsEnabled }) => {
	return (
		<>
			<Planet
				position={[0, 0, 70]}
				meshMaterialPath="/earth_map.jpeg"
				spinSpeed={0.005}
				size={3}
			/>
			<Text
				color={"white"}
				position={[-7, 0, 70]}
				font="/spaceFont.ttf"
				maxWidth={9}
				textAlign="left"
			>
				Here are my earthly pleasures
			</Text>
			<Card
				position={[7, 5, 70]}
				text="Writing"
				setControlsEnabled={setControlsEnabled}
				cardSize={[5, 3]}
				fontSize={0.5}
			/>
			<Card
				position={[7, 0, 70]}
				text="Visuals"
				cardSize={[5, 3]}
				fontSize={0.5}
				setControlsEnabled={setControlsEnabled}
			/>
			<Card
				position={[7, -5, 70]}
				text="??"
				cardSize={[5, 3]}
				fontSize={0.5}
				setControlsEnabled={setControlsEnabled}
			/>
		</>
	);
};

export default Earth;
