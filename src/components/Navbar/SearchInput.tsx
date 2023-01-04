import React from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { auth } from "firebase-admin";
import { user } from "firebase-functions/v1/auth";
import { User } from "firebase/auth";

type SearchInputProps = {
  user: User;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  const searchIcon = useColorModeValue("gray.400", "gray.500");
  const searchBg = useColorModeValue("gray.50", "gray.800");
  const searchHoverBg = useColorModeValue("gray.50", "gray.500");
  const sPlaceColor = useColorModeValue("gray.500", "gray.500");
  const sBorderColor = useColorModeValue("blue.500", "gray.500");
  return (
    <Flex
      flexGrow={1}
      maxWidth={user ? "auto" : "600px"}
      mr={2}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color={searchIcon}
          // children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: { sPlaceColor } }}
          _hover={{
            bg: { searchHoverBg },
            border: "1px solid",
            borderColor: { sBorderColor },
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: { sBorderColor },
            borderRadius: "15px 15px 0 0",
          }}
          height="35px"
          bg={searchBg}
          borderRadius="15px"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
