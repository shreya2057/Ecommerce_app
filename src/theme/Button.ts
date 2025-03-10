import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    rounded: "4px",
    fontWeight: "normal",
  },
  variants: {
    primary: {
      bg: "primary.500",
      color: "white",
      _hover: {
        _disabled: {
          bg: "primary.400",
        },
        bg: "primary.300",
      },
      _disabled: {
        _hover: {
          bg: "primary.300",
        },
      },
    },
    primary_outline: {
      borderColor: "secondary.700",
      borderWidth: 1,
      color: "secondary.700",
      rounded: "full",
      _hover: {
        _disabled: {
          bg: "primary.400",
        },
        bg: "secondary.700",
        color: "white",
      },
      _disabled: {
        _hover: {
          bg: "primary.300",
          color: "white",
        },
      },
    },
    primary_outline_rounded: {
      borderColor: "primary.400",
      borderWidth: 2,
      px: 10,
      rounded: "full",
      color: "primary.500",
      _hover: {
        _disabled: {
          bg: "primary.400",
        },
        bg: "primary.300",
        color: "white",
      },
      _disabled: {
        _hover: {
          bg: "primary.300",
          color: "white",
        },
      },
    },
    secondary: {
      bg: "secondary.500",
      color: "gray.50",
      _hover: {
        _disabled: {
          bg: "secondary.400",
        },
        bg: "secondary.600",
      },
      _disabled: {
        _hover: {
          bg: "gray.500",
        },
      },
    },
    secondary_light: {
      bg: "secondary.100",
      color: "secondary.900",
      _hover: {
        bg: "secondary.700",
        color: "white",
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
    ghost: {
      bg: "transparent",
      p: 0,
      color: "primary.500",
      _hover: {
        bg: "transparent",
        color: "primary.400",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});
