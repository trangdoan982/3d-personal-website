import { useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import Card from "../Card";
import Connect from "../Connect";
import { Dispatch, SetStateAction, useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";
import { Group } from "three";

const UFO = () => {
	const objRef = useRef<Group>(null);
	const mtl = useLoader(MTLLoader, "/models/Low_poly_UFO.mtl");
	const obj = useLoader(OBJLoader, "/models/ufo.obj", (loader) => {
		loader.setMaterials(mtl);
	});
	mtl.preload();
	return (
		<group
			ref={objRef}
			position={[0, -1, 20]}
			scale={0.1}
			rotation={[-10, -20, -10]}
		>
			<primitive object={obj} />
		</group>
	);
};
interface MercuryProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mercury: React.FC<MercuryProps> = ({ setControlsEnabled }) => {
	const intro = (
		<p>
			Hi there, if you've had some fun browsing through this website, it
			means we could be friends. <br /> I'm a big fan of talking to
			strangers, meeting new people, and letting this kind of magic
			happen. <br /> But I get it, I've browsed through endless personal
			websites, found cool people, and never reached out to them because I
			didn't know what to say except "Your website seems cool." <br />
			So here are some prompts to help spark your creativity:{" "}
		</p>
	);
	interface ConnectMainProps {
		onClose: () => void;
	}
	const ConnectMain: React.FC<ConnectMainProps> = ({ onClose }) => {
		return <Connect intro={intro} onClose={onClose} />;
	};

	return (
		<>
			<UFO />
			<Text
				color={"white"}
				position={[-7, 0, 20]}
				fontSize={1}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
			>
				Make first contact
			</Text>
			<Card
				position={[6, 0, 20]}
				text="But how?"
				cardSize={[4, 2]}
				fontSize={0.5}
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={ConnectMain}
			/>
		</>
	);
};

export default Mercury;
