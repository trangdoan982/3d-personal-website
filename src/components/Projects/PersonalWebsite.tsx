import { Box, Image } from "@chakra-ui/react";
import Projects from "../projects";

interface PersonalWebsiteProps {
	onClose: () => void;
}
const PersonalWebsite: React.FC<PersonalWebsiteProps> = ({ onClose }) => {
	const content = (
		<div>
			This website is made with joy! <br />
			I'm especially proud of this website because I tried to make it once
			in 2021, but{" "}
			<a href="https://trangdoan.substack.com/i/103278110/side-projects">
				<u>gave up</u> half-way.{" "}
			</a>{" "}
			Picking it up and feeling confident doing so was such a growth
			moment. <br />
			Special thanks to Arjun for helping with the design.
		</div>
	);
	return (
		<Projects
			onClose={onClose}
			imagePath={"https://i.imgur.com/dwcoI8A.gif"}
			projectTitle="This Website"
			time="February 2024 - April 2024"
			// TODO: replace link once hosted online
			link="localhost:3000"
			role="Frontend developer"
			stack="Typescript,ThreeJS, NextJS, React"
			content={content}
		/>
	);
};

export default PersonalWebsite;
