import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export type ProductItemType = {
  title: String;
  price: Number;
  category: String;
  img: string;
};

function Product({ title, price, category, img }: ProductItemType) {
  return (
    <Box p="8" m="4" w="22%" border="1px" borderColor="gray.300" rounded="lg">
      <Image
        src={img}
        my="4"
        mx="auto"
        alt="Product"
        w="70%"
        h="50%"
        objectFit="contain"
      />
      <Heading fontSize="md" fontWeight="regular">
        {title}
      </Heading>
      <Heading my="4" fontSize="xl">
        $ {price}
      </Heading>
      <Text my="4" color="gray.600">
        {category}
      </Text>
    </Box>
  );
}

export default Product;
