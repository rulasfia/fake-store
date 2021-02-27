import { Text, Button, HStack, Spacer } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";

function Navbar(props: any) {
  const { items } = useAppSelector((state) => state.cart);
  return (
    <HStack
      position="fixed"
      zIndex={2}
      borderBottom="1px"
      borderColor="gray.300"
      w="full"
      py="4"
      px="12"
      bg="white"
      dir="row"
      justify="space-between"
    >
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
        Cart ({items?.length})
      </Button>
    </HStack>
  );
}

export default Navbar;
