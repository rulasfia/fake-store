import React, { useState, useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Product from "./components/product";
import Navbar from "./components/navbar";
import Drawer from "./components/drawer";
import { Flex, VStack, useDisclosure } from "@chakra-ui/react";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export interface ProductItemType {
  title: string;
  price: number;
  category: string;
  img: string;
}

const fetcher = async (): Promise<CartItemType[]> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

function App() {
  const [carts, setCarts] = useState<CartItemType[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const { data, isLoading, error } = useQuery("products", fetcher, {
    keepPreviousData: true,
  });

  const addToCart = (item: any): void => {
    setCarts([...carts, item]);
  };

  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <VStack color="gray.700">
        <Navbar btnRef={btnRef} onOpen={onOpen} />
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          carts={carts}
        />
        <Flex dir="row" m="12" justify="space-between" wrap="wrap">
          {data?.map((item) => {
            return (
              <Product
                key={item.id}
                img={item.image}
                title={item.title}
                price={item.price}
                category={item.category}
                addToCart={addToCart}
              />
            );
          })}
        </Flex>
      </VStack>
    </BrowserRouter>
  );
}

export default App;
