import { CloseButton, Flex } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

export type GalleryItem = {
	id: number;
	title: string;
	imageUrl: string;
	href: string;
};
const GalleryItem: React.FC<GalleryItem> = ({ title, imageUrl, href }) => {
	return (
		<a
			href={href}
			style={{
				display: "inline-block",
				width: "50%",
				padding: "30px",
				boxSizing: "border-box",
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<div
				style={{
					position: "relative",
					paddingBottom: "100%",
					overflow: "hidden",
					borderRadius: "5px",
					// boxShadow: "-5px 5px 5px rgba(206, 200, 203, 0.6)",
				}}
			>
				<img
					src={imageUrl}
					alt={title}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</div>
			<div style={{ marginTop: "10px" }}>{title}</div>
		</a>
	);
};

// Gallery component to display the list of items
interface GalleryProps {
	onClose: () => void;
	galleryData: GalleryItem[];
	intro: React.ReactNode;
}
const Gallery: React.FC<GalleryProps> = ({ onClose, galleryData, intro }) => {
	return (
		<Html
			style={{
				width: "100vw",
				height: "95vh",
				top: "-50vh",
				position: "absolute",
				left: "-50vw",
				overflowY: "auto",
				borderRadius: "30px",
				margin: "10px",
				padding: "50px",
				color: "white",
				backgroundImage: 'url("/starry_background.png")',
			}}
		>
			<CloseButton
				color="white"
				onClick={onClose}
				style={{ margin: "10px" }}
			/>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
			>
				{intro}
				<Flex direction="row" wrap="wrap" alignContent="space-evenly">
					{galleryData.map((item) => (
						<GalleryItem key={item.id} {...item} />
					))}
				</Flex>
			</motion.div>
		</Html>
	);
};

export default Gallery;
