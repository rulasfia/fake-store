import React from "react";
import {
  useToast,
  Flex,
  VStack,
  Link,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import type { ProductItemType } from "../App";

// type ItemProps = ProductItemType & { addToCart(a: any): void, setCarts():  };

interface ItemProps extends ProductItemType {
  addToCart(a: any): void;
}

function Product(props: ItemProps) {
  const { title, img, price, category }: ProductItemType = props;
  const toast = useToast();

  return (
    <Flex
      flexDir="column"
      justify="space-between"
      px="8"
      py="6"
      m="4"
      w="22%"
      border="1px"
      borderColor="gray.300"
      rounded="lg"
    >
      <Image
        src={img}
        my="4"
        mx="auto"
        alt="Product"
        w="70%"
        h="40%"
        objectFit="contain"
        cursor="pointer"
        onClick={() => alert("Detail page masih dalam pengembangan")}
      />

      <VStack h="auto" w="full">
        <Link w="full" href="#" fontSize="md" fontWeight="regular">
          {title.length > 62 ? `${title.slice(0, 62)}...` : title}
        </Link>
        <Heading w="full" my="4" fontSize="2xl">
          $ {price}
        </Heading>
        <Link alignSelf="start" my="4" color="gray.500">
          {category}
        </Link>
      </VStack>
      <Button
        onClick={() => {
          props.addToCart({ img, title, price, category });
          toast({
            position: "bottom-right",
            title: "Added to cart.",
            description: "Item successfully added to cart.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
}

export default Product;
