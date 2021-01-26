import React from "react";
import { Text, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import type { ProductItemType } from "../App";

function CartItem({ cart }: any) {
  console.log(cart);
  const { img, title, price, category }: ProductItemType = cart;

  return (
    <HStack justify="space-between">
      <Image
        src={img}
        my="4"
        mx="auto"
        alt="Product"
        w="30%"
        h="50%"
        objectFit="contain"
        cursor="pointer"
        onClick={() => alert("helo")}
      />
      <VStack>
        <Heading fontSize="lg">{title}</Heading>
        <Text>{category}</Text>
        <Text>$ {price}</Text>
      </VStack>
    </HStack>
  );
}

export default CartItem;
