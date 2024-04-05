import { useRouter } from "next/router";
import Planet from "./Planet";
import { Text, RoundedBox } from "@react-three/drei";
import Card from "../Card";
import Connect from "../Connect";
import { Dispatch, SetStateAction } from "react";

interface MercuryProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mercury: React.FC<MercuryProps> = ({ setControlsEnabled }) => {
	return (
		<>
			{" "}
			<Planet
				position={[0, 0, 20]}
				meshMaterialPath="/mercury.jpeg"
				spinSpeed={0.005}
			/>
			<Text
				color={"white"}
				position={[-5, 0, 20]}
				fontSize={1}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
			>
				Make first contact
			</Text>
			<Card
				position={[5, 0, 20]}
				text="But how?"
				cardSize={[5, 3]}
				fontSize={0.5}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={Connect}
			/>
		</>
	);
};

export default Mercury;
