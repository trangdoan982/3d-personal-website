import Planet from "./Planet";
import { Text } from "@react-three/drei";

const Mars = () => {
    return <><Planet 
        position={[0, 0, 50]} 
        meshMaterialPath='/mars.jpeg'
        spinSpeed={0.002}
        size={2}
/>
<Text color={'white'} position={[-5,0,50]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
            This is the Mars, where I flex about my projects
        </Text>
</>
}

export default Mars