import carrito from "./assets/img/carrito.svg";

const CartWidget = () =>{
    return(
        <div className="col-md-2 d-flex justify-content-center">
            <img className="" src={carrito} alt="logo-NavBar" />
            0
        </div>
    )
}

export default CartWidget;