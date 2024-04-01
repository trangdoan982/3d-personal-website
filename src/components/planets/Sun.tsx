import Planet from "./Planet";
import { Text, Image } from "@react-three/drei";

const Sun = () => {
	// const font = useFont('Times New Roman')
	return (
		<>
			<Planet
				position={[40, 0, 250]}
				meshMaterialPath="/sun.jpeg"
				spinSpeed={0.005}
				size={50}
			/>
			<Text
				color={"white"}
				position={[-70, 0, 250]}
				// font="/spaceFont.ttf"
				maxWidth={120}
				fontSize={10}
				textAlign="left"
			>
				Welcome to my space. This is Trang, an interdisciplinary
				software engineer. I code, tell stories, move my body, and build
				communities
			</Text>
			<Text
				color={"white"}
				position={[-110, -50, 250]}
				fontSize={6}
				textAlign="left"
			>
				Scroll to explore
			</Text>
			<Text
				color={"white"}
				position={[-110, -60, 250]}
				fontSize={6}
				textAlign="left"
			>
				Drag for fun
			</Text>
		</>
	);
};

export default Sun;
