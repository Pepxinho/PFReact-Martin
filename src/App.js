import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./styles/styles.css";


function App() {

    return (
        <main>
            <BrowserRouter>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <NavBar />
                </nav>
                <Routes>
                    <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a EM-Componentes"} />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>EROR 404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>



        </main>

    )

}

export default App;
