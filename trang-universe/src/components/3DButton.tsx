import { useRouter } from "next/router"
import { Plane, Text, useCursor } from "@react-three/drei"
import { Vector3 } from "@react-three/fiber"
import { useState } from "react"

interface Button3DProps {
    text: string,
    route: string,
    position: Vector3,
    size?: [width?: number | undefined, height?: number | undefined, widthSegments?: number | undefined, heightSegments?: number | undefined]
}
const Button3D: React.FC<Button3DProps> = ({
    text,
    route,
    position,
    size = [4,2]
}) => {
    const router = useRouter()
    const handleClick = () =>{
        router.push(route)
    }

    const [hovered, setHovered] = useState(false)
    useCursor(hovered)

    return<>
        <Plane onClick={handleClick} position={position} args={size} 
            onPointerOver={() => setHovered(true)} 
            onPointerOut={() => setHovered(false)}>
            <meshBasicMaterial attach="material" color="grey" transparent opacity={0.7} />
        </Plane>
        <Text 
            position={position}
            color={'white'}
            fontSize={0.5}
            font="/spaceFont.ttf"
        >
                {text}
        </Text>
    </>
}
export default Button3D