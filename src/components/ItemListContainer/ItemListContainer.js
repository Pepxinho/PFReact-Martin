import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    

    const { categoryId } = useParams()

    useEffect(() => {

       const collectionRef = categoryId ? query(collection(db, "items"), where("categoria", "==", categoryId)) : collection(db, "items")

       getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data }
        })
        setProducts(productsAdapted)
       })
       
    }, [categoryId])


    return (
        <div className="container-fluid ">
            <h1 className="title">{saludo}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;