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
} from "@chakra-ui/react";

export type DrawerActionType = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<any>;
};

export default function DrawerCart({ isOpen, onClose, btnRef, carts }: any) {
  console.log(carts);

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
              {carts.length > 0 ? (
                carts.map((cart: any, i: number) => (
                  <CartItem key={i} cart={cart} />
                ))
              ) : (
                <Heading>Cart is Empty</Heading>
              )}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
