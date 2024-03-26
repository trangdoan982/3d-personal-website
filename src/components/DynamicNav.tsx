import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Html } from "@react-three/drei";

const DynamicNav = () => {
	// Get access to the camera
	const { camera } = useThree();
	const [animating, setAnimating] = React.useState(false);
	const easeInOut = (t: number) => {
		return 1 - Math.pow(1 - t, 9);
	};

	// Function to handle camera movement animation
	const animateCamera = (targetPosition: THREE.Vector3Like) => {
		setAnimating(true); // Set animating state to true

		// Animate camera movement over 2 seconds
		const startTime = Date.now();
		const duration = 2000; // milliseconds
		const startPosition = camera.position.clone();

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
				// Continue animating
				requestAnimationFrame(animateFrame);
			} else {
				// Animation complete
				setAnimating(false);
			}
		};

		animateFrame();
	};

	// Render loop to update camera movement
	useFrame(() => {
		if (animating) {
			// Update camera controls during animation
			camera.updateMatrixWorld();
		}
	});

	const handleClickAbout = () => {
		animateCamera(new THREE.Vector3(0, 0, 500));
	};
	// Function to handle the onClick event
	const handleClickProject = () => {
		// Change the camera's position
		animateCamera(new THREE.Vector3(0, 0, 180));
	};

	const handleClickEarth = () => {
		animateCamera(new THREE.Vector3(0, 0, 60));
	};

	const handleClickConnect = () => {
		animateCamera(new THREE.Vector3(0, 0, 30));
	};

	const margin = 4;

	return (
		<Html
			style={{
				position: "absolute",
				top: "-50vh",
				left: "-48vw",
				padding: "10px",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				// backgroundColor: "black",
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
			<button
				style={{
					margin: margin,
					color: "white",
				}}
				onClick={handleClickProject}
			>
				Projects{" "}
			</button>
			<button
				style={{ margin: margin, color: "white" }}
				onClick={handleClickEarth}
			>
				Earthly pleasures
			</button>
			<button
				style={{ margin: margin, color: "white" }}
				onClick={handleClickConnect}
			>
				Connect
			</button>
		</Html>
	);
};

export default DynamicNav;
