import { useCard } from "../context/CardContext";
import "../css/CartCard.css";

export const CartCard = ({product}) => {
  const {removeCart} = useCard()
  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeCart(product)}>Remove</button>
      </div>
  )
}
