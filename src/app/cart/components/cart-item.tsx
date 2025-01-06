import { useShoppingCart } from "@/context/shopping-cart-context";
import productLists from "@/data/products.json";
import { formatCurrency } from "@/utilities/formatCurrency";

type CartItemProps = {
  uuid: number;
  quantity: number;
};

const CartItem = ({ uuid, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = productLists.find((product) => product.uuid === uuid);
  if (item == null) return null;

  return (
    <div className="flex gap-2">
      <p>Image here</p>
      <div className="mx-auto">
        <p>{item.name}</p>
        {quantity > 1 && <span className="text-muted">x{quantity}</span>}
      </div>
      <div className="text-sm">
        {formatCurrency(item.price)}

        <button
          className="p-2 rounded-lg border-red-400 border-2 "
          onClick={() => removeFromCart(uuid)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
