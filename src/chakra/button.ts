import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    dark_solid: {
      color: "black",
      bg: "gray.400",
      _hover: {
        bg: "gray.200",
      },
    },
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    dark_outline: {
      color: "gray.100",
      border: "1px solid",
      borderColor: "gray.100",
    },
    dark_primary: {
      color: "gray.100",
      bgColor: "gray.800",
      border: "1px solid",
      borderColor: "gray.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
