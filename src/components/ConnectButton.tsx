import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

const ConnectButton = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/connect");
    };
    return <>
        <Button _hover={{ bg: 'black' }} variant='ghost' color={'white'} onClick={handleClick}>
            Connect with me
        </Button>  
    </>
}

export default ConnectButton