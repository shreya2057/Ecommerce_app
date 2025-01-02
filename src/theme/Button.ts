import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    rounded: "4px",
    fontWeight: "normal",
  },
  variants: {
    primary: {
      bg: "gray.500",
      color: "brand.100",
      _hover: {
        _disabled: {
          bg: "gray.400",
        },
        bg: "gray.500",
      },
      _disabled: {
        _hover: {
          bg: "gray.500",
        },
      },
    },
    light: {
      bg: "gray.200",
      color: "gray.700",
      _hover: {
        bg: "gray.300",
      },
      _disabled: {
        _hover: {
          bg: "gray.600",
          color: "gray.100",
        },
      },
    },
    light_outline: {
      bg: "gray.50",
      color: "gray.600",
      borderWidth: 1,
      borderColor: "gray.200",
      _hover: {
        bg: "gray.100",
      },
      _disabled: {
        borderColor: "gray.200",
      },
    },
    iconButton: {
      bgColor: "gray.800",
      color: "gray.100",
    },
  },
  defaultProps: {
    variant: "primary",
  },
});
