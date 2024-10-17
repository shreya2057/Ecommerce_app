import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { ModalComponent } from "./ModalComponent";
import { TbAlertCircleFilled } from "react-icons/tb";

const FooterButton = ({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: () => void;
}) => {
  return (
    <HStack>
      <Button onClick={onClose} variant={"light"} size={"sm"}>
        Cancel
      </Button>
      <Button onClick={onSubmit} variant={"primary"} size={"sm"}>
        Proceed
      </Button>
    </HStack>
  );
};

export const AlertPage = ({
  message,
  isOpen,
  onClose,
  onSubmit,
}: {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      modalProps={{ isCentered: true, size: "xs" }}
      modalContentProps={{ background: "white" }}
      footer={<FooterButton onSubmit={onSubmit} onClose={onClose} />}
    >
      <VStack pt={5} color={"gray.500"}>
        <TbAlertCircleFilled fontSize={"60px"} />
        <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.500"} as={"i"}>
          {message}
        </Text>
      </VStack>
    </ModalComponent>
  );
};
