import { Switch } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Product from "./components/product";
import { Flex } from "@chakra-ui/react";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const fetcher = async (): Promise<CartItemType[]> => {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products?limit=20"
  );
  return data;
};

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    fetcher
  );

  console.log(isLoading);
  console.table(data);
  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <Flex color="gray.700" m="12" justify="space-between" wrap="wrap">
        {data?.map((item) => {
          return (
            <Product
              img={item.image}
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          );
        })}
      </Flex>
    </BrowserRouter>
  );
}

export default App;
