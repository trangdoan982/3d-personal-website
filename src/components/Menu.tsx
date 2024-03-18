import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

import { useRouter } from "next/router";


const MenuNav = () => {
    const router = useRouter();

    return (
    <Menu>
        <MenuButton _hover={{ bg: 'black' }} _expanded={{ bg: 'black' }} color={'white'} as={Button} variant={'ghost'}>
            Menu
        </MenuButton>
        <MenuList _expanded={{bg: 'white'}}>
            <MenuItem onClick={() => {router.push("/");}}>Home Page</MenuItem>
            <MenuItem onClick={() => {router.push("/projects");}}>Projects</MenuItem>
            <MenuItem onClick={() => {router.push("/interests");}}>Earthly pleasures</MenuItem>
            <MenuItem onClick={() => {router.push("/connect");}}>Connect with me</MenuItem>
        </MenuList>
    </Menu>
    )
}
export default MenuNav
