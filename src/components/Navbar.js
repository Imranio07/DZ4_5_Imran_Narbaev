import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? 'active-link' : '';

const Navbar = () => {
  return (
    <nav>
      <ul> 
        <li><NavLink to="list-products" className={activeLink({ isActive: true })}>Products</NavLink></li>
        <li><NavLink to="/basket" className={activeLink({ isActive: true })}>basket of goods</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
