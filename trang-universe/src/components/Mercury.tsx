import Planet from "./Planet";
import { Text } from "@react-three/drei";

const Mercury = () => {
    return <> <Planet 
            position={[0, 0, 0]} 
            meshMaterialPath='/mercury.jpeg'
            spinSpeed={0.005}
    />
    <Text color={'white'} position={[-5,0,0]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
            This is the Mercury, where you will connect with me
        </Text>
</>
}

export default Mercury;