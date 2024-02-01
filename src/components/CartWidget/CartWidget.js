import Cart from "../Cart/Cart";
import carrito from "./assets/img/carrito.svg";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    return(
        <div className="col-md-2 d-flex justify-content-center">
           <Link to={"/carrito"}> <button className="btn">
                <img className="cartImg" src={carrito} alt="logo-NavBar" />
            0
            
            </button></Link>
        </div>
    )
}

export default CartWidget;