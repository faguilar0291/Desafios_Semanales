import "../layout/container.scss";
import { Box } from "@mui/material";
import ProductList from "./ProductList"
import useCounter from "../hooks/useCounter";
import useLocalStorage from "../hooks/useLocalStorage";

//51:34

const Container = () => {

    const { count, decrement, increment } = useCounter();
    const localStorage = useLocalStorage();

    console.log(count);

    return (
        <Box className="container">
            <h2 className="container__title">Lista de productos</h2>
                {/* CONTADOR - Versión custom hook useCounter */}
                <Box>
                    <button onClick={() => increment()}>+</button>
                    <p>{count}</p>
                    <button onClick={() => decrement()}>-</button>
                </Box>
                {/* CONTADOR - Versión custom hook useLocalStorage */}
                <Box>
                    <button onClick={() => localStorage.setItemValue("count", localStorage.value+1)}>+</button>
                    <p>{localStorage.value}</p>
                    <button onClick={() => localStorage.setItemValue("count", localStorage.value-1)}>-</button>
                    <Box>
                        <button onClick={() => localStorage.clearItems()}>Clear</button>
                        <button onClick={() => localStorage.removeItem("pepe")}>Remove</button>
                    </Box>
                </Box>
            <ProductList>
                
            </ProductList>
        </Box>
    );
};

export default Container;