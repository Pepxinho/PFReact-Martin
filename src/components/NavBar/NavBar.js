import NavBarLogo from "./assets/img/logo-em.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (

    <div className="container-fluid">
      <div className="col-2 d-flex justify-content-start">
      <Link to={"/"}> <img className="logo-navbar" src={NavBarLogo} alt="logo" /> </Link></div>
<div className="col-6">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        <li className="nav-item">
          <button className="btn">Procesadores</button>
        </li>
        <li className="nav-item">
          <button className="btn">Motherboards</button>
        </li>
        <li className="nav-item">
          <button className="btn">Tarjetas Gráficas</button>
        </li>
        <li className="nav-item">
          <button className="btn">Memorias</button>
        </li>
        <li className="nav-item">
          <button className="btn">Almacenamiento</button>
        </li>

      </ul>
      </div>
      <CartWidget />

    </div>

  )
}



export default NavBar;