import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ nombre, imagen, categoria, descripcion, precio, stock }) => {
    return (
        
        <article className="CardItem col-4">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    {stock}
                </p>
            </section>
        </article>
        
    )
}

export default ItemDetail;