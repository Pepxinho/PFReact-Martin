import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])


    const categoria = useParams().categoria

    useEffect(() => {

        const productosRef = collection(db, "items")

        getDocs(productosRef).then((resp) => {

            setProducts(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
        }) 
        

    }, [categoria])


    return (
        
            <div className="container-fluid">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="">{saludo}</h1>
                </div>
                <ItemList products={products} />
            </div>
                
        

    )
}


export default ItemListContainer;