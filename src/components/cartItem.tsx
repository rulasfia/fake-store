import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

function CartItem({ cart }: any) {
  console.log(cart);

  return (
    <Flex>
      <Image
        // src={img}
        my="4"
        mx="auto"
        alt="Product"
        w="70%"
        h="50%"
        objectFit="contain"
        cursor="pointer"
        onClick={() => alert("helo")}
      />
      <Heading>Hello</Heading>
    </Flex>
  );
}

export default CartItem;
