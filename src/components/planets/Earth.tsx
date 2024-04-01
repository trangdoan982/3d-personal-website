import Planet from "./Planet";
import { Text } from "@react-three/drei";
import Button3D from "../3DButton";

const Earth = () => {
	return (
		<>
			<Planet
				position={[0, 0, 50]}
				meshMaterialPath="/earth_map.jpeg"
				spinSpeed={0.005}
				size={3}
			/>
			<Text
				color={"white"}
				position={[-5, 0, 50]}
				font="/spaceFont.ttf"
				maxWidth={5}
				textAlign="right"
			>
				This is the Earth, where I list out things that ground me (aka
				my interests)
			</Text>
			{/* <Button3D
				text="Click me"
				route="/interests"
				position={[-10, -5, 50]}
			/> */}
		</>
	);
};

export default Earth;
