import NavBarLogo from "./assets/img/logo-em.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (

    <div className="container-fluid">
      <div className="col-2 d-flex justify-content-start">
      <Link to={"/"}> <img className="logo-navbar" src={NavBarLogo} alt="logo" /> </Link></div>
<div className="col-6 ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between navList">
        <li className="nav-item">
         <Link className="link-text" to={"/products/:categoria"}>Procesadores</Link>
        </li>
        <li className="nav-item">
        <Link className="link-text" to={"/products/:categoria"}>Motherboards</Link>
        </li>
        <li className="nav-item">
        <Link className="link-text" to={"/products/:categoria"}>Tarjetas Gráficas</Link>
        </li>
        <li className="nav-item">
        <Link className="link-text" to={"/products/:categoria"}>Memorias</Link>
        </li>
        <li className="nav-item">
        <Link className="link-text" to={"/products/:categoria"}>Almacenamiento</Link>
        </li>

      </ul>
      </div>
      <CartWidget />

    </div>

  )
}



export default NavBar;