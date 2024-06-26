import Planet from "./Planet";
import { Text } from "@react-three/drei";
import Card from "../Card";
import { Dispatch, SetStateAction } from "react";
import Writing from "../interests/Writing";
import Visuals from "../interests/Visuals";
import Connect from "../Connect";
import Button from "../Button";

interface EarthProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Earth: React.FC<EarthProps> = ({ setControlsEnabled }) => {
	const intro = (
		<p>
			?? What project can we collaborate on ?? <br />
			There's nothing I love more than sharing the joy of a creative
			project with friends <br />
			No matter what it is or could be, leave me message
		</p>
	);
	interface ConnectSubProps {
		onClose: () => void;
	}
	const ConnectSub: React.FC<ConnectSubProps> = ({ onClose }) => {
		return <Connect intro={intro} onClose={onClose} />;
	};
	return (
		<>
			<Planet
				position={[2, 0, 20]}
				meshMaterialPath="/earth_map.jpeg"
				spinSpeed={0.005}
				size={3.5}
			/>
			<Text
				color={"white"}
				position={[-5, 0, 20]}
				font="/fonts/futura_medium.ttf"
				maxWidth={9}
				textAlign="left"
				lineHeight={1.2}
			>
				Here are my earthly pleasures
			</Text>
			{/* <Card
				position={[8, 5, 20]}
				text="Writing"
				setControlsEnabled={setControlsEnabled}
				cardSize={[5, 3]}
				fontSize={0.5}
				ProjectComponent={Writing}
			/> */}
			<Button
				position={[6.5, 1.5, 20]}
				text="Writing                  ➜"
				setControlsEnabled={setControlsEnabled}
				buttonSize={[5, 1]}
				fontSize={0.4}
				textXOffset={2}
				textYOffset={0.15}
				ProjectComponent={Writing}
			/>
			<Button
				position={[6.5, -0.5, 20]}
				text="Visuals                  ➜"
				setControlsEnabled={setControlsEnabled}
				buttonSize={[5, 1]}
				fontSize={0.4}
				textXOffset={1.9}
				textYOffset={0.05}
				ProjectComponent={Visuals}
			/>
			<Button
				position={[6.5, -2.5, 20]}
				text="??                           ➜"
				setControlsEnabled={setControlsEnabled}
				buttonSize={[5, 1]}
				fontSize={0.4}
				textXOffset={1.8}
				textYOffset={-0.05}
				ProjectComponent={ConnectSub}
			/>
		</>
	);
};

export default Earth;
