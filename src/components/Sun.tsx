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
				font="/spaceFont.ttf"
				maxWidth={120}
				fontSize={10}
				textAlign="left"
			>
				Hi I’m Trang. Welcome to my space. Software Engineer and xyz
				lorem ipsum
			</Text>
		</>
	);
};

export default Sun;
