import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)

    const id = useParams().id

    useEffect(() => {
        const docRef = doc(db, "items", id)
        getDoc(docRef).then(resp => {
             setItem( {...resp.data(), id: resp.id})
            
        })
    }, [id])
    
    return (
        <div className="container">
            {item && <ItemDetail item={item} />}
        </div>
    )

}


export default ItemDetailContainer;