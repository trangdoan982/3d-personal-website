import { Html } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

interface CardProps {
	position: Vector3;
	text: string;
	projectComponent?: string;
}
const Card: React.FC<CardProps> = ({ position, text, projectComponent }) => {
	return (
		<Html position={position}>
			<div
				style={{
					backgroundColor: "white",
					color: "black",
					padding: "30px",
				}}
			>
				{text}
			</div>
		</Html>
	);
};

export default Card;
