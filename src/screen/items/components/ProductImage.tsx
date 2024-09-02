import { Image } from "@chakra-ui/react";

export const ProductImage = ({ image }: { image: string }) => {
  const regex = /^https:\/\/i\.imgur\.com\/[A-Za-z0-9]{7}\.(jpeg|jpg|png|gif)$/;
  return (
    <>
      {regex.test(image) && (
        <Image objectFit={"contain"} rounded={"md"} src={image} />
      )}
    </>
  );
};
