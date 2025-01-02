import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaRegListAlt } from "react-icons/fa";

export const SideDrawer = ({
  heading,
  hasFooter,
  children,
  buttonText,
  buttonProps,
}: SideDrawerProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant={"light_outline"}
        px={8}
        leftIcon={<FaRegListAlt />}
        {...buttonProps}
      >
        {buttonText}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {heading && (
            <DrawerHeader color={"gray.600"} px={8}>
              {heading}
            </DrawerHeader>
          )}

          <DrawerBody px={0}>{children}</DrawerBody>

          {hasFooter && (
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

type SideDrawerProps = {
  heading?: React.ReactNode;
  hasFooter?: boolean;
  children: React.ReactNode;
  buttonText: string;
  buttonProps?: ButtonProps;
};
