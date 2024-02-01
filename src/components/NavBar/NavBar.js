import NavBarLogo from "./assets/img/logo-em.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"; 

const NavBar = () => {

 return (

  <div className="container-fluid">
   <Link to={"/"}> <img className="logo-navbar" src={NavBarLogo} alt="logo" /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn"></button>
        </li>
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