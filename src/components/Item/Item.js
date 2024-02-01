import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({  nombre, id, imagen, precio, stock }) => {

    return (
        <article className="col-2 CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
           <Link to={"/item/" + id}><picture className="ItemPic">
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture></Link>
            <section>
                <p className="Info">
                    Precio: <span className="priceColor">${precio}</span>
                </p>
                <p className="Info">
                    Stock disponible: <span className="stockColor">{stock}</span>
                </p>
            </section>
        </article>
    )
}

export default Item;