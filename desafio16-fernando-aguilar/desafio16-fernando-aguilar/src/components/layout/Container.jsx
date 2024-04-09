import "../layout/container.scss";
import { Box } from "@mui/material";
import { products } from "../../data/products";
import useLocalStorage from "../hooks/useLocalStorage";
import ProductList from "./ProductList"
import ProductForm from "./ProductForm";
import { jsx } from "@emotion/react";

//51:34

const Container = () => {

    const localStorage = useLocalStorage({ count: 0, products});

    const handleRemoveItem = (key) => {

        console.log(key);
        
        console.log(localStorage.value.products);

        const productos = localStorage.value.products;

        console.log(productos[0]);

        const filteredProducts = productos.filter(product => product.name !== key);

        console.log(filteredProducts);

        // localStorage.setItemValue('products', JSON.stringify(filteredProducts));

        // console.log(localStorage);
    }


    return (
        <Box className="container">
                {/* CONTADOR - Versión custom hook useLocalStorage */}
                <Box>
                    <Box>
                        <button onClick={() => localStorage.clearItems()}>Clear</button>
                        <button onClick={() => localStorage.removeItem("count")}>Remove</button>
                    </Box>
                </Box>
            <h2 className="container__title">Lista de productos</h2>
            <ProductList>
                {localStorage.value.products.map( (product) => (
                    <Box key={product.name} className="container__products">
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleRemoveItem(product.name)}>Remove</button>
                    </Box>
                ))}
            </ProductList>
            <ProductForm>
                <h2>Creación de productos</h2>
                    <input type="text"
                        onChange={ (e) => createName(e)}
                    />
            </ProductForm>
        </Box>
    );
};

export default Container;