import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";


export default function useShoppingCart() {
    return useContext(ShoppingCartContext);
  }