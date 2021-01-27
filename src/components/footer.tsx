import React from "react";
import { Flex, Link, Spacer, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex w="full" py="4" px="8" bg="gray.200">
      <Text>Copyright Fake Store 2021 | MK Asfian</Text>
      <Spacer />
      <Text>
        Data from{" "}
        <Link color="green.500" href="https://fakestoreapi.com/">
          fakestoreapi.com
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
