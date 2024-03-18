import Planet from "./Planet";
import { Text } from "@react-three/drei";

const Mars = () => {
    return <>
    <Planet 
        position={[0, 0, 150]} 
        meshMaterialPath='/mars.jpeg'
        spinSpeed={0.002}
        size={2}
        route="/projects"
    />
    <Text color={'white'} position={[-5,0,150]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
                This is the Mars, where I flex about my projects
            </Text>
    </>
}

export default Mars