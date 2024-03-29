import { Box, Flex, Image, Spacer, Text, CloseButton } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

interface SectionCardProps {
	bg: string;
	text: string;
	imagePath: string;
}
const SectionCard = ({ bg, text, imagePath }: SectionCardProps) => {
	return (
		<Box
			bg={bg}
			width="50%"
			height="350px"
			display="flex"
			justifyContent={"center"}
			alignItems={"center"}
			fontSize={40}
		>
			{text}
		</Box>
	);
};
interface OverlayPageProps {
	onClose: () => void;
}
const Projects: React.FC<OverlayPageProps> = ({ onClose }) => {
	return (
		<Html
			style={{
				backgroundColor: "whitesmoke",
				width: "100vw",
				height: "95vh",
				top: "-50vh",
				position: "absolute",
				left: "-50vw",
				overflowY: "auto",
				borderRadius: "20px",
				margin: "10px",
				padding: "10px",
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
			>
				<CloseButton onClick={onClose} />
				<Box
					width="100%"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Image
						boxSize="80%"
						borderRadius="20"
						margin={20}
						src="/heroMainProject.png"
					/>
				</Box>
				<Box
					fontWeight={200}
					backgroundColor={"greenyellow"}
					width="100%"
					padding={20}
					paddingLeft={20}
				>
					<Text>
						Some people call this Jack-of-all-trade. I call this a
						Renaissance woman in the making.{" "}
					</Text>
					<Text>
						{" "}
						Having interested in many things, I yada yada yada{" "}
					</Text>
					<Text>
						{" "}
						But here are some of them projects. check it out{" "}
					</Text>
				</Box>
				<Flex flexDirection="row" flexWrap={"wrap"} p="10">
					<SectionCard
						bg="seagreen"
						text="Coding"
						imagePath="/test"
					/>
					<Spacer />
					<SectionCard
						bg="lavender"
						text="Writing"
						imagePath="/test"
					/>
					<SectionCard bg="yellow" text="Visuals" imagePath="/test" />
					<Spacer />
					<SectionCard bg="peachpuff" text="???" imagePath="/test" />
				</Flex>
			</motion.div>
		</Html>
	);
};

export default Projects;
