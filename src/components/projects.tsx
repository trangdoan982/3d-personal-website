import { Box, Flex, Image, Spacer, Text, CloseButton } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

export interface OverlayPageProps {
	onClose: () => void;
	imagePath: string;
	projectTitle: string;
	time: string;
	link: string;
	role: string;
	stack: string;
	content: React.ReactNode;
	OtherContent?: React.ComponentType<any>;
}

const Projects: React.FC<OverlayPageProps> = ({
	onClose,
	imagePath,
	projectTitle,
	time,
	link,
	role,
	stack,
	content,
	OtherContent,
}) => {
	return (
		<Html
			style={{
				width: "100vw",
				height: "95vh",
				top: "-50vh",
				position: "absolute",
				left: "-50vw",
				overflowY: "auto",
				borderRadius: "20px",
				margin: "10px",
				padding: "10px",
				backgroundImage: 'url("/starry_background.png")',
			}}
		>
			<CloseButton
				color="white"
				onClick={onClose}
				style={{ position: "fixed" }}
			/>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
			>
				<Box width="100%" display={"flex"}>
					<Image
						boxSize="100%"
						borderRadius="20"
						margin={40}
						src={imagePath}
						// width={"100%"}
						height={"70vh"}
						objectFit={"cover"}
					/>
				</Box>
				<Flex direction={"row"} padding={40} alignItems={"baseline"}>
					<Box
						color={"white"}
						fontFamily={"var(--font-inter)"}
						flex={1}
					>
						<Box fontSize={40}> {projectTitle} </Box>
						<Box fontSize={20}> {time} </Box>
						<Box fontSize={20}>
							{" "}
							<a href={link}> Link ➜ </a>
						</Box>
					</Box>
					<Box
						color={"white"}
						fontFamily={"var(--font-inter)"}
						fontSize={20}
						flex={1}
						lineHeight={2}
					>
						<Box>
							<i>Role </i>
							{role}
						</Box>
						<Box>
							<i>Stack </i> {stack}
						</Box>
						<Box>
							<br /> {content}
						</Box>
					</Box>
				</Flex>
				{OtherContent && <OtherContent />}
			</motion.div>
		</Html>
	);
};

export default Projects;
