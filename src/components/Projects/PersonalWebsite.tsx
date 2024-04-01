import { Box, Image } from "@chakra-ui/react";
import Projects from "../Projects";

interface PersonalWebsiteProps {
	onClose: () => void;
}
const PersonalWebsite: React.FC<PersonalWebsiteProps> = ({ onClose }) => {
	return (
		<Projects
			onClose={onClose}
			imagePath={"/earth_map.jpeg"}
			projectTitle="This Website"
			time="February 2024 - April 2024"
			link="localhost:3000"
			role="Frontend developer"
			stack="Typescript, NextJS, ThreeJS, React, TailwindCSS"
			content="What an impressive project yuhhhh"
		/>
	);
};

export default PersonalWebsite;
