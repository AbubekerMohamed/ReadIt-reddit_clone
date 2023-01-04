import React from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../../atoms/authModalAtom";
import { auth } from "../../../../firebase/clientApp";

import NoUserList from "./NoUserList";
import UserList from "./UserList";

import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

type MenuWrapperProps = {};

const MenuWrapper: React.FC<MenuWrapperProps> = () => {
  const [authModal, setModalState] = useRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === "light" ? false : true;
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex alignItems="center">
          <Flex alignItems="center">
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                  as={FaRedditSquare}
                />
                <Box
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                  <Flex alignItems="center">
                    <Icon as={IoSparkles} color="brand.100" mr={1} />
                    <Text color="gray.400">1 karma</Text>
                  </Flex>
                </Box>
              </>
            ) : (
              <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem fontSize="10pt" fontWeight={700}>
          <Flex alignItems="center">
            <Icon fontSize={20} mr={2} as={MdDarkMode} />
            Dark Mode
            <Radio
              isChecked={isChecked}
              paddingLeft="5rem"
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={toggleColorMode}
              size="lg"
            />
          </Flex>
        </MenuItem>
        {user ? <UserList /> : <NoUserList setModalState={setModalState} />}
      </MenuList>
    </Menu>
  );
};
export default MenuWrapper;
