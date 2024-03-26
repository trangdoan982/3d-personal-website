import NavBar from "@/components/NavBar";
import { Box, Flex, Image, Spacer, Text, CloseButton } from "@chakra-ui/react";
import React from "react";
import { Html } from "@react-three/drei";

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
		<Html>
			<NavBar />
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
				<Text> But here are some of them projects. check it out </Text>
			</Box>
			<Flex flexDirection="row" flexWrap={"wrap"} p="10">
				<SectionCard bg="seagreen" text="Coding" imagePath="/test" />
				<Spacer />
				<SectionCard bg="lavender" text="Writing" imagePath="/test" />
				<SectionCard bg="yellow" text="Visuals" imagePath="/test" />
				<Spacer />
				<SectionCard bg="peachpuff" text="???" imagePath="/test" />
			</Flex>
			{/* <div className='flex flex-col m-5'>
        <div className='w-full rounded-lg m-10 content-center' >
          <img className='rounded-lg' src='/heroMainProject.png' />
        </div>
        <div className='text-red-700'>
         <h1 className='underline text-underline'>Some call this Jack-of-all-trade. I call this a Renaissance woman in the making.
         but what is it really</h1>
        </div>  
      </div> */}
		</Html>
	);
};

export default Projects;
