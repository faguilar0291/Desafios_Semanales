import "../layout/container.scss";
import { Box } from "@mui/material";
import { products } from "../../data/products";
import useLocalStorage from "../hooks/useLocalStorage";
import ProductList from "./ProductList"
import ProductForm from "./ProductForm";
import { useState } from "react";

//51:34

const Container = () => {

    const localStorage = useLocalStorage({products});

    const handleRemoveItem = (key) => {

        console.log(localStorage.value.products);

        const productos = localStorage.value.products;

        console.log(productos[0]); // verifico que cargó la info de localstorage

        const filteredProducts = productos.filter(product => product.name !== key);

        localStorage.setItemValue('products', filteredProducts);
    };

    // const [inputProductName , setInputProductName] = useState("");
    // const [inputDescription , setInputDescription] = useState("");
    // const [InputPrice , setInputPrice] = useState("");

    // const generateId = () => {
    //      let maxId = 0;
    //      const productos = localStorage.value.products;
    //      productos.forEach( (product) => {
    //      if (product.id > maxId) {
    //          maxId = product.id;
    //          }
    //      });
    //      return maxId + 1;
    // };

    // const handleProductName = (e) => {
    //     setInputProductName(e.target.value);
    // };

    // const handleProductDescription = (e) => {
    //     setInputDescription(e.target.value);
    // };

    // const handleProductPrice = (e) => {
    //     setInputPrice(e.target.value);
    // };

    //  const addTaskBtn = () => {
    //      if (inputProductName.trim().length > 0) {
    //      // Crea una nueva tarea con un id nuevo (único)
    //          const newProduct = {
    //              id: generateId(),
    //              title: inputProductName,
    //              description: inputDescription,
    //              price: InputPrice,
    //         };

    //      // Actualiza la lista de tareas
    //      localStorage.setItemValue('products', newProduct);
    //      setTaskArray([...taskArray, newTask]);

    //         // Resetear el input de "Nueva tarea"
    //         setInputProductName("");
    //         setInputDescription("");
    //         setInputPrice("");
    //     }

    // };



    return (
        <Box className="container">
                {/* custom hook useLocalStorage */}
                <Box>
                    <Box>
                        <button onClick={() => localStorage.clearItems()}>Clear</button>
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
                {/* <input
                    type="text"
                    id='newName'
                    placeholder='Nombre'
                    value={inputProductName}
                    onChange={(e) => handleProductName(e)}
                    className='form-input'/>
                    <input type="text"
                    placeholder='Descripción'
                    value={inputDescription}
                    onChange={(e) => handleProductDescription(e)}
                    className='form-input'/>
                    <input type="number"
                    placeholder='Precio'
                    value={inputPrice}
                    onChange={(e) => handleProductPrice(e)}
                    className='form-input'/>
                <button onClick={} className='form-btn material-symbols-outlined'>Agregar Producto</button> */}
            </ProductForm>
        </Box>
    );
};

export default Container;