import React, { useState } from "react";
import {
  Text,
  Heading,
  HStack,
  VStack,
  Image,
  ButtonGroup,
  Button,
  IconButton,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import type { ProductItemType } from "../App";

function CartItem({ cart, setCarts }: any) {
  const { img, title, price, category }: ProductItemType = cart;
  const [qty, setQty] = useState<number>(1);

  return (
    <HStack justify="space-between">
      <Image
        src={img}
        my="4"
        mx="4"
        alt="Product"
        w="20%"
        h="50%"
        objectFit="contain"
        cursor="pointer"
        onClick={() => alert("helo")}
      />
      <VStack w="full">
        <Flex w="full" justify="space-between">
          <VStack>
            <Heading fontSize="lg" w="full" textAlign="left">
              {title}
            </Heading>
            <Text w="full" mb="4">
              {category}
            </Text>
          </VStack>

          <IconButton
            ml="4"
            colorScheme="red"
            variant="outline"
            aria-label="delete"
            icon={<DeleteIcon />}
            onClick={() => alert("Fitur masih dalam pengembangan")}
          />
        </Flex>

        <Flex w="full" mt="4">
          <ButtonGroup size="sm" isAttached variant="outline">
            <IconButton
              aria-label="Min"
              icon={<MinusIcon />}
              isDisabled={qty <= 1 ? true : false}
              onClick={() => (qty > 1 ? setQty(qty - 1) : undefined)}
            />
            <Button mr="-px" cursor="default">
              {qty}
            </Button>
            <IconButton
              aria-label="Plus"
              icon={<AddIcon />}
              onClick={() => (qty >= 0 ? setQty(qty + 1) : undefined)}
            />
          </ButtonGroup>
          <Spacer />
          <Text w="full" textAlign="right">
            $ {price}
          </Text>
        </Flex>
      </VStack>
    </HStack>
  );
}

export default CartItem;
