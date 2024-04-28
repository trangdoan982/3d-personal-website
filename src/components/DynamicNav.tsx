import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Html } from "@react-three/drei";

const DynamicNav = () => {
	const { camera } = useThree();
	const [animating, setAnimating] = React.useState(false);
	const easeInOut = (t: number) => {
		return 1 - Math.pow(1 - t, 9);
	};

	// Handle camera movement animation
	const animateCamera = (targetPosition: THREE.Vector3Like) => {
		setAnimating(true);

		const startTime = Date.now();
		const duration = 2000;
		const startPosition = camera.position.clone();
		console.log(startPosition);

		const animateFrame = () => {
			const now = Date.now();
			const progress = Math.min((now - startTime) / duration, 1); // Ensure progress is between 0 and 1
			const easedProgress = easeInOut(progress);

			// Interpolate between start and target position
			const newPosition = startPosition
				.clone()
				.lerp(targetPosition, easedProgress);
			camera.position.copy(newPosition);

			// Check if animation is complete
			if (progress < 1) {
				requestAnimationFrame(animateFrame);
			} else {
				setAnimating(false);
			}
		};

		animateFrame();
	};

	useFrame(() => {
		if (animating) {
			camera.updateMatrixWorld();
		}
	});

	const handleClickAbout = () => {
		animateCamera(new THREE.Vector3(0, 0, 500));
	};
	const handleClickProject = () => {
		animateCamera(new THREE.Vector3(0, 0, 124));
	};

	const handleClickEarth = () => {
		animateCamera(new THREE.Vector3(0, 0, 38));
	};

	const handleClickConnect = () => {
		animateCamera(new THREE.Vector3(0, 0, 20));
	};

	const margin = 4;

	return (
		<>
			<Html
				style={{
					position: "absolute",
					top: "-48vh",
					left: "-47vw",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<button
					style={{
						fontFamily: "var(--font-nasa)",
						margin: 4,
						fontSize: 20,
						marginBottom: 10,
						color: "#4D7FFF",
					}}
					onClick={handleClickAbout}
				>
					TRANG DOAN{" "}
				</button>
			</Html>
			<Html
				style={{
					position: "absolute",
					top: "43vh",
					left: "-25vw",
					padding: "0px",
					width: "50vw",
					height: "7vh",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					backgroundImage: "/starry_background.png",
					fontFamily: "var(--font-inter)",
					fontWeight: 600,
					color: "white",
					fontSize: 18,
				}}
			>
				<button onClick={handleClickProject}>Projects </button>
				<button onClick={handleClickEarth}>Earthly pleasures</button>
				<button onClick={handleClickConnect}>Connect</button>
			</Html>
		</>
	);
};

export default DynamicNav;
