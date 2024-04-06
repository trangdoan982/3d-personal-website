import { Box, Image } from "@chakra-ui/react";
import Projects from "../projects";

interface WikicredibilityProps {
	onClose: () => void;
}
const Wikicredibility: React.FC<WikicredibilityProps> = ({ onClose }) => {
	return (
		<Projects
			onClose={onClose}
			imagePath={"/mercury.jpeg"}
			projectTitle="Wikicredibility"
			time="February 2022 - March 2023"
			link="localhost:3000"
			role="Fullstack developer"
			stack="Python"
			content="Wowwww is this NLP???"
		/>
	);
};

export default Wikicredibility;
