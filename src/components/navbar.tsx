import { useRef } from "react";
import { Text, Button, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

function Navbar(props: any) {
  return (
    <HStack w="full" py="4" px="12" dir="row" justify="space-between">
      <Text fontWeight="bold" fontSize="2xl">
        Fake Store
      </Text>
      <Spacer />

      <Button
        variant="solid"
        leftIcon={<IoCart />}
        ref={props.btnRef}
        colorScheme="green"
        onClick={props.onOpen}
      >
        Cart
      </Button>
    </HStack>
  );
}

export default Navbar;
