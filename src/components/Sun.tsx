import Planet from "./Planet";
import { Text, useFont } from "@react-three/drei";

const Sun = () => {
    // const font = useFont('Times New Roman')
    return <>
        <Planet 
                position={[0, 0, 250]} 
                meshMaterialPath='/sun.jpeg'
                spinSpeed={0.005}
                size={5}
        />
        <Text color={'white'} position={[-10,0,250]} font="/spaceFont.ttf" maxWidth={5} textAlign="right"> 
            This is the Sun, where the general introduction goes 
        </Text>
    </>
}

export default Sun;