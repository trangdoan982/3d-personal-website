import { Box, Image } from "@chakra-ui/react";
import Projects from "../Projects";

const OtherContent = () => {
	const imagePath =
		"https://i.pinimg.com/originals/90/88/1e/90881e9b4b15ca8d24dd87be250b1bfe.gif";
	return (
		<>
			<Box
				width="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Image
					boxSize="50%"
					borderRadius="20"
					margin={20}
					src={imagePath}
				/>
			</Box>
			<Box
				width="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Image
					boxSize="50%"
					borderRadius="20"
					margin={20}
					src={imagePath}
				/>
			</Box>
		</>
	);
};

interface BrexProps {
	onClose: () => void;
}

const Brex: React.FC<BrexProps> = ({ onClose }) => {
	const content = (
		<div>
			{" "}
			Hello there <br /> whatever this is
		</div>
	);
	return (
		<Projects
			imagePath="https://i.pinimg.com/originals/90/88/1e/90881e9b4b15ca8d24dd87be250b1bfe.gif"
			onClose={onClose}
			projectTitle="Brex"
			time="July 2023 - February 2024"
			link="https://www.brex.com/signup"
			role="Fullstack Software Engineer"
			stack="Typescript, Kotlin, NextJS, GraphQL, gRPC, postgreSQL"
			content={content}
			OtherContent={OtherContent}
		/>
	);
};

export default Brex;
