import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.jpg"
import "../css/Header.css";
import { useCard } from "../context/CardContext";

export const Header = () => {
  const {cartList} = useCard();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Ecommerce</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
