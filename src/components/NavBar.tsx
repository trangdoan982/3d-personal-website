import ConnectButton from "./ConnectButton";
import MenuNav from "./Menu";
import { Flex } from "@chakra-ui/react";

const NavBar = () => {
    return <Flex
    bg="black"
    justify="space-between"
    align="center"
    flexDirection={{ base: "column", md: "row" }}
    padding={15}
  >
        <MenuNav />
        <ConnectButton />
    </Flex>
}

export default NavBar