import "../layout/container.scss";
import { Box } from "@mui/material";
import { products } from "../../data/products";
import useLocalStorage from "../hooks/useLocalStorage";
import ProductList from "./ProductList"
import ProductForm from "./ProductForm";
import { useEffect, useState } from "react";

//51:34

const Container = () => {

    const localStorage = useLocalStorage({products});
    const [newProductArray , setNewProductArray] = useState(localStorage.value.products);

    useEffect(() => {
        localStorage.setItemValue('products', newProductArray);
    }, [newProductArray]);

    const handleRemoveItem = (key) => {

        const filteredProducts = newProductArray.filter(product => product.id !== key);

        setNewProductArray(filteredProducts);
    };

    const generateId = () => {
         let maxId = 0;
         newProductArray.forEach( (product) => {
         if (product.id > maxId) {
             maxId = product.id;
             }
         });
         return maxId + 1;
    };


    //Creamos los state para cada dato nuevo
    const [inputProductName , setInputProductName] = useState("");
    const [inputDescription , setInputDescription] = useState("");
    const [inputPrice , setInputPrice] = useState("");

    const handleProductName = (e) => {
    setInputProductName(e.target.value);
    };

    const handleProductDescription = (e) => {
        setInputDescription(e.target.value);
    };

    const handleProductPrice = (e) => {
        setInputPrice(e.target.value);
    };

    const addNewProduct = () => {

        //Verificamos que funcione el button con un console
        console.log("Tocaste agregar nuevo producto");

        if (inputProductName.trim().length > 0) {

            const newProduct = {
                    id: generateId(),
                    name: inputProductName,
                    description: inputDescription,
                    price: inputPrice,
                    fav: false,
                };

                const updatedProducts = [...newProductArray, newProduct];
                setNewProductArray(updatedProducts);

                setInputProductName("");
                setInputDescription("");
                setInputPrice("");
        }

        console.log(newProductArray);

    };

    const clearItems = () => {
        setNewProductArray([]);
    };

    const modifyProductName = (id, value) => {
        const index = newProductArray.findIndex( (product) => product.id === id);
        const productArray = [...newProductArray];
        productArray[index].name = value;
        setNewProductArray(productArray);
    };

    const modifyProductDescription = (id, value) => {
        const index = newProductArray.findIndex( (product) => product.id === id);
        const productArray = [...newProductArray];
        productArray[index].description = value;
        setNewProductArray(productArray);
    };

    const modifyProductPrice = (id, value) => {
        const index = newProductArray.findIndex( (product) => product.id === id);
        const productArray = [...newProductArray];
        productArray[index].price = value;
        setNewProductArray(productArray);
    };

    const favProduct = (id) => {

        console.log(id);
        const index = newProductArray.findIndex( (product) => product.id === id);
        console.log("Este es el index: " + index);

        const favProductList = [...newProductArray];
        console.log("Esta es la favProductlist", favProductList);

        console.log("Este es el producto indexado", favProductList[index]);
        console.log("Este es el contenido del fav del producto anterior", favProductList[index].fav);
        favProductList[index].fav = !favProductList[index].fav;
        console.log("Asi queda el fav del producto", favProductList[index].fav);

        setNewProductArray(favProductList);
        console.log(id);

        console.log(favProductList[id]);
    };


    return (
        <Box className="container">
                {/* custom hook useLocalStorage */}
            <h2 className="container__title">Lista de productos</h2>
            <ProductList>
                <Box className="container__list">
                    {newProductArray.map( (product) => (
                        <Box key={product.id} className={product.fav ? 'container__list--products favProduct' : 'container__list--products'}>
                            <div className="container__list--products-info">
                                <p>Producto: 
                                    <input className="products-name"
                                        type="text"
                                        size={15}
                                        value={product.name}
                                        onChange={ (e) => modifyProductName(product.id, e.target.value)}
                                    />
                                </p>
                                <p>Descripción: 
                                    <input className="products-description"
                                        type="text"
                                        size={15}
                                        value={product.description}
                                        onChange={ (e) => modifyProductDescription(product.id, e.target.value)}
                                        />
                                </p>
                                <p>Precio: 
                                    <input className="products-price"
                                        type="number"
                                        size={5}
                                        value={product.price}
                                        onChange={ (e) => modifyProductPrice(product.id, e.target.value)}
                                        />
                                </p>
                            </div>
                            <div className="container__list--products-buttons">
                                <button className='task-btn material-symbols-outlined' onClick={() => handleRemoveItem(product.id)}>delete</button>
                                <button className='task-btn material-symbols-outlined' onClick={() => favProduct(product.id)}>star</button>
                            </div>
                        </Box>
                    ))}
                </Box>
            </ProductList>
            <ProductForm>
                <Box className="form">
                    <div className="form__container">
                        <h2>Creación de productos</h2>
                        <input
                            type="text"
                            id='newName'
                            placeholder='Nombre'
                            value={inputProductName}
                            onChange={handleProductName}
                            className='form-input'/>
                        <input type="text"
                            placeholder='Descripción'
                            value={inputDescription}
                            onChange={handleProductDescription}
                            className='form-input'/>
                        <input type="number"
                            placeholder='Precio'
                            value={inputPrice}
                            onChange={handleProductPrice}
                            className='form-input'/>
                    </div>
                    <div className="form__button">
                        <button onClick={addNewProduct} className='form-btn material-symbols-outlined'>Agregar Producto</button>
                    </div>
                </Box>
            </ProductForm>
        </Box>
    );
};

export default Container;