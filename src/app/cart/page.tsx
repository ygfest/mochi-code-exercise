import { useShoppingCart } from "@/context/shopping-cart-context";
import { formatCurrency } from "@/utilities/formatCurrency";



type CartProps ={
  isOpen: boolean
}

const Cart = ({isOpen}: CartProps) => {
  const {handleCloseCart, cartItems} = useShoppingCart();

  return <div></div>;
};

export default Cart;
