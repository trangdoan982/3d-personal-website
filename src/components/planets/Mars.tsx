import Planet from "./Planet";
import { Text, useCursor } from "@react-three/drei";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Card from "../Card";
import Brex from "../Projects/Brex";
import PersonalWebsite from "../Projects/PersonalWebsite";
import Button from "../Button";
import DanceFilm from "../Projects/DanceFilm";
import SciOS from "../Projects/SciOS";
import Wikicredibility from "../Projects/Wikicredibility";

interface MarsProps {
	setControlsEnabled: Dispatch<SetStateAction<boolean>>;
}
const Mars: React.FC<MarsProps> = ({ setControlsEnabled }) => {
	// State to track which project to show
	const [activeProject, setActiveProject] = useState<string | null>(null);

	// Check for URL hash on mount and when it changes
	useEffect(() => {
		const checkHash = () => {
			const hash = window.location.hash.toLowerCase();
			
			// Check for specific project anchors
			if (hash === "#projects-brex") {
				setActiveProject("brex");
				setControlsEnabled(false);
			} else if (hash === "#projects-personal") {
				setActiveProject("personal");
				setControlsEnabled(false);
			} else if (hash === "#projects-dance") {
				setActiveProject("dance");
				setControlsEnabled(false);
			} else if (hash === "#projects-scios") {
				setActiveProject("scios");
				setControlsEnabled(false);
			} else if (hash === "#projects-wiki") {
				setActiveProject("wiki");
				setControlsEnabled(false);
			}
		};

		// Check on initial mount
		checkHash();

		// Listen for hash changes
		window.addEventListener("hashchange", checkHash);
		return () => {
			window.removeEventListener("hashchange", checkHash);
		};
	}, [setControlsEnabled]);

	// Handle project closing
	const handleCloseProject = () => {
		setActiveProject(null);
		setControlsEnabled(true);
		// Update URL to general projects section
		window.history.pushState(null, "", "#projects");
	};

	const handleViewResume = () => {
		window.open(
			"https://drive.google.com/file/d/1Wxli3bgxoxnHO2s2kxyZwmT8-EeCiIB4/view?usp=sharing",
			"_blank"
		);
	};
	
	const [hovered, setHovered] = useState(false);
	useCursor(hovered);

	// Create project wrapper components that update the URL
	interface ProjectWrapperProps {
		onClose: () => void;
	}

	// const BrexWrapper: React.FC<ProjectWrapperProps> = ({ onClose }) => {
	// 	useEffect(() => {
	// 		window.history.pushState(null, "", "#projects-brex");
	// 	}, []);
	// 	return <Brex onClose={onClose} />;
	// };

	const PersonalWebsiteWrapper: React.FC<ProjectWrapperProps> = ({ onClose }) => {
		useEffect(() => {
			window.history.pushState(null, "", "#projects-personal");
		}, []);
		return <PersonalWebsite onClose={onClose} />;
	};

	const DanceFilmWrapper: React.FC<ProjectWrapperProps> = ({ onClose }) => {
		useEffect(() => {
			window.history.pushState(null, "", "#projects-dance");
		}, []);
		return <DanceFilm onClose={onClose} />;
	};

	const SciOSWrapper: React.FC<ProjectWrapperProps> = ({ onClose }) => {
		useEffect(() => {
			window.history.pushState(null, "", "#projects-scios");
		}, []);
		return <SciOS onClose={onClose} />;
	};

	// const WikiWrapper: React.FC<ProjectWrapperProps> = ({ onClose }) => {
	// 	useEffect(() => {
	// 		window.history.pushState(null, "", "#projects-wiki");
	// 	}, []);
	// 	return <Wikicredibility onClose={onClose} />;
	// };

	return (
		<>
			<Planet
				position={[6, 0, 80]}
				meshMaterialPath="/mars.jpeg"
				spinSpeed={0.002}
				size={10}
			/>
			<Text
				color={"white"}
				position={[-11, 0, 80]}
				font="/fonts/futura_medium.ttf"
				lineHeight={1.2}
				fontSize={1.2}
				maxWidth={14}
				textAlign="left"
				onClick={handleViewResume}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				My projects are out of this world. Here are some
				selected work. You can view my resume here.
			</Text>
			{/* <Button
				position={[25, 8, 80]}
				text="Brex"
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={BrexWrapper}
				buttonSize={[8, 5]}
				fontSize={1}
				textXOffset={3.5}
				textYOffset={2}
			/> */}
			<Button
				position={[18, 5, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				textXOffset={5.1}
				textYOffset={0.1}
				text="Dance film"
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={DanceFilmWrapper}
				/>
			<Button
				position={[18, -1, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				textXOffset={5.1}
				textYOffset={-0.1}
				text="SciOS"
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={SciOSWrapper}
				/>
			<Button
				position={[18, -7, 80]}
				buttonSize={[11, 2.5]}
				borderWidth={0.1}
				textXOffset={5.1}
				text="Personal website"
				setControlsEnabled={setControlsEnabled}
				ProjectComponent={PersonalWebsiteWrapper}
			/>
			
			

			{/* Conditionally render projects based on activeProject state */}
			{activeProject === "brex" && <Brex onClose={handleCloseProject} />}
			{activeProject === "personal" && <PersonalWebsite onClose={handleCloseProject} />}
			{activeProject === "dance" && <DanceFilm onClose={handleCloseProject} />}
			{activeProject === "scios" && <SciOS onClose={handleCloseProject} />}
			{/* {activeProject === "wiki" && <Wikicredibility onClose={handleCloseProject} />} */}
		</>
	);
};

export default Mars;
