import React from "react";
import {
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";

const Premium: React.FC = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.500");
  const iconColor = useColorModeValue("brand.100", "gray.900");

  return (
    <Flex
      direction="column"
      bg={bgColor}
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor={borderColor}
    >
      <Flex mb={2}>
        <Icon as={GiCheckedShield} fontSize={26} color={iconColor} mt={2} />
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>Reddit Premium</Text>
          <Text>The best Reddit experience, with monthly Coins</Text>
        </Stack>
      </Flex>
      <Button height="30px" bg={iconColor}>
        Try Now
      </Button>
    </Flex>
  );
};
export default Premium;
