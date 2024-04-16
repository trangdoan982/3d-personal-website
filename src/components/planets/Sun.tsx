import { useState } from "react";
import Planet from "./Planet";
import { Text, Image, useCursor } from "@react-three/drei";

const Sun = () => {
	const handleOnClickLinkedIn = () => {
		window.open("https://www.linkedin.com/in/trang-doan-m23/");
	};
	const handleOnClickGithub = () => {
		window.open("https://github.com/trangdoan982");
	};
	const handleOnClickSubstack = () => {
		window.open("https://trangdoan.substack.com/");
	};
	const [hovered, setHovered] = useState(false);
	useCursor(hovered);

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
				Welcome to my space. I am Trang, an interdisciplinary software
				engineer. I code, tell stories, move my body, and build
				communities
			</Text>
			<Image
				url="/icons/linkedin.png"
				position={[-130, -50, 250]}
				color={"white"}
				scale={8}
				onClick={handleOnClickLinkedIn}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			/>
			<Image
				url="/icons/github.png"
				position={[-110, -50, 250]}
				color={"white"}
				scale={8}
				onClick={handleOnClickGithub}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			/>
			<Image
				url="/icons/substack.png"
				position={[-90, -50, 250]}
				color={"white"}
				scale={8}
				onClick={handleOnClickSubstack}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			/>
			<Text
				color={"white"}
				position={[-110, -60, 250]}
				fontSize={6}
				textAlign="left"
			>
				Scroll to explore
			</Text>
			<Text
				color={"white"}
				position={[-110, -70, 250]}
				fontSize={6}
				textAlign="left"
			>
				Drag for fun
			</Text>
		</>
	);
};

export default Sun;
