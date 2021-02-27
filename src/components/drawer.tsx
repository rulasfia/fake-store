import CartItem from "./cartItem";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  VStack,
  StackDivider,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearCart } from "../redux/cartSlice";

export type DrawerActionType = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<any>;
};

export default function DrawerCart({ isOpen, onClose, btnRef }: any) {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>

            <DrawerBody>
              <VStack divider={<StackDivider borderColor="gray.200" />}>
                {items?.length !== 0 ? (
                  items?.map((cart: any, i: number) => (
                    <CartItem key={i} cart={cart} />
                  ))
                ) : (
                  <Heading>Cart is Empty</Heading>
                )}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                variant="outline"
                onClick={() => dispatch(clearCart())}
              >
                Delete All
              </Button>
              <Spacer />
              <HStack>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="green">Purchase</Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
