import Planet from "./Planet";
import { Text, RoundedBox } from "@react-three/drei";

const Mercury = () => {
    return <> <Planet 
            position={[0, 0, 20]} 
            meshMaterialPath='/mercury.jpeg'
            spinSpeed={0.005}
            route="/connect"
    />
    <Text color={'white'} position={[-5,0,20]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
            This is the Mercury, where you will connect with me
        </Text>
</>
}

export default Mercury;