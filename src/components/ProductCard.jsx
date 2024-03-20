import { useEffect, useState } from "react";
import { useCard } from "../context/CardContext";
import "../css/ProductCard.css";

export const ProductCard = ({product}) => {
  const {cartList, addCart, removeCart} = useCard()
  const {name, price, image} = product;
  const [iteamCartAdded, setIteamCartAdded] = useState(false)

  useEffect(() => {
    const iteam = cartList.find(element => element.id === product.id);
    if(iteam) {
      setIteamCartAdded(true);
    } else {
      setIteamCartAdded(false);
    }
  }, [cartList, product.id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {iteamCartAdded ? (<button style={{"background-color": 'red'}} onClick={() => removeCart(product)}>Remove</button>) : (<button onClick={() => addCart(product)}>Add To Cart</button>)}
      </div>
    </div>
  )
}
