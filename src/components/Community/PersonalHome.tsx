import React from "react";
import {
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";

const PersonalHome: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.500");
  const createVariant = useColorModeValue("outline", "dark_outline");
  const createPostVariant = useColorModeValue("oauth", "dark_primary");

  return (
    <Flex
      direction="column"
      bg={bgColor}
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor={borderColor}
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/redditPersonalHome.png)"
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={FaReddit} fontSize={50} color="brand.100" mr={2} />
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Your personal Reddit frontpage, built for you.
          </Text>
          <Button height="30px" variant={createPostVariant}>
            Create Post
          </Button>
          <Button variant={createVariant} height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
