import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({  nombre, id, imagen, precio, stock }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
           <Link to={"/item/" + id}><picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture></Link>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
        </article>
    )
}

export default Item;