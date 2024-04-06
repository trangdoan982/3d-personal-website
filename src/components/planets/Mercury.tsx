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
				ProjectComponent={ConnectMain}
			/>
		</>
	);
};

export default Mercury;
