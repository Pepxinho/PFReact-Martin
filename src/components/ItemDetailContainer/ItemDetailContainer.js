import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {ItemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, "items", ItemId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
    }, [ItemId])
    
    return (
        <div className="ItemListContainer">
            <ItemDetail {...product} />
        </div>
    )

}


export default ItemDetailContainer;