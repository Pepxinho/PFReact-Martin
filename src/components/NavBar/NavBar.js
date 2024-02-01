import NavBarLogo from "./assets/img/logo-em.png";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {

 return (

  <div className="container-fluid">
    <a className="navbar-brand" href="../public/index.html"><img className="logo-navbar" src={NavBarLogo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../public/index.html">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Componentes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Tarjetas Gráficas</a></li>
            <li><a class="dropdown-item" href="#">Placas madre</a></li>
            <li><a class="dropdown-item" href="#">Procesadores</a></li>
            <li><a class="dropdown-item" href="#">Memorias</a></li>
            <li><a class="dropdown-item" href="#">Almacenamiento</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pre-Armados
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Intel</a></li>
            <li><a class="dropdown-item" href="#">AMD</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
    <CartWidget />

  </div>

)
  }



export default NavBar;