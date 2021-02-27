import React, { useState, useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";
// import { BrowserRouter } from "react-router-dom";
import Product from "./components/product";
import Navbar from "./components/navbar";
import Drawer from "./components/drawer";
import Footer from "./components/footer";
import { Flex, VStack, useDisclosure, Heading } from "@chakra-ui/react";
import type { CartItemType } from "./AppType";

const fetcher = async (): Promise<CartItemType[]> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

function App() {
  const { data, isLoading, isSuccess, error } = useQuery("products", fetcher, {
    keepPreviousData: true,
  });
  const [carts, setCarts] = useState<CartItemType[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  if (error) return <h1>Error</h1>;

  return (
    <VStack color="gray.700">
      <Navbar btnRef={btnRef} onOpen={onOpen} />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        carts={carts}
        setCarts={setCarts}
      />

      {isLoading && (
        <Heading fontSize="xl" h="100vh" py="48">
          Loading...
        </Heading>
      )}
      {isSuccess && (
        <>
          <Flex dir="row" py="20" px="12" justify="space-between" wrap="wrap">
            {data?.map((item) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  qty={0}
                />
              );
            })}
          </Flex>
          <Footer />{" "}
        </>
      )}
    </VStack>
  );
}

export default App;
