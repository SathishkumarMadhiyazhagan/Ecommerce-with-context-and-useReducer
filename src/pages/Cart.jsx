import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCard } from "../context/CardContext";

export const Cart = () => {
  useTitle("Cart");
  const {cartList, total} = useCard()

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
