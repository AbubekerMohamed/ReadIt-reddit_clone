import { Flex, Icon, Input, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import useDirectory from "../../hooks/useDirectory";

type CreatePostProps = {};

const CreatePostLink: React.FC<CreatePostProps> = () => {
  const router = useRouter();
  const { toggleMenuOpen } = useDirectory();
  const onClick = () => {
    // Could check for user to open auth modal before redirecting to submit
    const { community } = router.query;
    if (community) {
      router.push(`/r/${router.query.community}/submit`);
      return;
    }
    // Open directory menu to select community to post to
    toggleMenuOpen();
  };
  const bgColor = useColorModeValue("white", "gray.700");
  const bgHovColor = useColorModeValue("gray.300", "gray.700");
  const crColor = useColorModeValue("gray.50", "gray.800");
  const crFocusColor = useColorModeValue("blue.500", "gray.100");
  const crBorderColor = useColorModeValue("gray.200", "gray.700");
  const crFocusBg = useColorModeValue("white", "gray.500");
  const placeHolderColor = useColorModeValue("gray.300", "gray.200");
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg={bgColor}
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor={bgHovColor}
      p={2}
      mb={4}
    >
      <Icon as={FaReddit} fontSize={36} color="gray.300" mr={4} />
      <Input
        placeholder="Create Post"
        fontSize="10pt"
        _placeholder={{ color: placeHolderColor }}
        _hover={{
          bg: { bgHovColor },
          border: "1px solid",
          borderColor: { bgHovColor },
        }}
        _focus={{
          outline: "none",
          bg: { crFocusBg },
          border: "1px solid",
          borderColor: { crFocusColor },
        }}
        bg={crColor}
        borderColor={crBorderColor}
        height="36px"
        borderRadius={4}
        mr={4}
        onClick={onClick}
      />
      <Icon
        as={IoImageOutline}
        fontSize={24}
        mr={4}
        color="gray.400"
        cursor="pointer"
      />
      <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" />
    </Flex>
  );
};
export default CreatePostLink;
