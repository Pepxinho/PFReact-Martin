import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }


    const decrement = () => {
        if (quantity > stock) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className="Counter">
            <div className="Controls">
                <button className="btn button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="btn button" onClick={increment}>+</button>
            </div>
            <button className="btn button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;