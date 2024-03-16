import Planet from "./Planet";
import { Text } from "@react-three/drei";

const Earth = () => {
    return <>
        <Planet 
            position={[0, 0, 150]} 
            meshMaterialPath='/earth_map.jpeg'
            spinSpeed={0.005}
            size={3}
        />
         <Text color={'white'} position={[-5,0,150]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
            This is the Earth, where I list out things that ground me (aka my interests) 
        </Text>
    </>
}

export default Earth;