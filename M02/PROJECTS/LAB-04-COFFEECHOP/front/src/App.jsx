import { Link, NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Comments from "./pages/Comments/Comments";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";

import "./App.css";

function App() {

    return (
        <>
            <div id="wrapper">
                <h1>Café Artesanal</h1>

                <nav style={{
                    padding: "10px",
                    backgroundColor: "#F0F0F0",
                    marginBottom: "20px",
                }}>
                    <NavLink
                        to="/"
                        style={ ( isActive ) => ( {
                            marginRight: "10px",
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "teal" : "brown"
                        } ) }
                    >Inicio</NavLink>
                    <NavLink
                        to="/nuestro-cafe"
                        style={ ( isActive ) => ( {
                            marginRight: "10px",
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "teal" : "brown"
                        } ) }
                    >Nuestro Café</NavLink>
                    <NavLink
                        to="/testimonios"
                        style={ ( isActive ) => ( {
                            marginRight: "10px",
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "teal" : "brown"
                        } ) }
                    >Testimonios</NavLink>
                    <NavLink
                        to="/contact"
                        style={ ( isActive ) => ( {
                            marginRight: "10px",
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "teal" : "brown"
                        } ) }
                    >Contact</NavLink>
                    <NavLink
                        to="/carrito"
                        style={ ( isActive ) => ( {
                            marginRight: "10px",
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "teal" : "brown"
                        } ) }
                    >Carrito</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/nuestro-cafe" element={ <Products /> } />
                    <Route path="/testimonios" element={ <Comments /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/carrito" element={ <Cart /> } />
                </Routes>
            </div>
        </>
    )
}

export default App
