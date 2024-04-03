import { jsx } from "@emotion/react";
import { useEffect, useState } from "react"

//clase 55 / 53min

const useLocalStorage = (initialValue = {}) => {
     const [ value, setValue ] = useState(initialValue);

    //  const productsStorage = {
    //     count: 1,
    //     saludo: "hola",
    //     anio: 2024,
    //  }

    const exist = () => {
        if (window.localStorage.getItem("count") === null){
            return false;
        }

        return true;
    }

     useEffect(() => {
       const itemValue = JSON.parse(window.localStorage.getItem("count"));
       setValue(itemValue);
     }, []);

     const setItemValue = ( key, newValue ) => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setValue({...value, [key] : newValue});
     };

     const removeItem = ( key ) => {
        window.localStorage.removeItem(key);
        
        const currentItems = {...value};
        delete currentItems[key];
        setValue(currentItems);
     };

     const clearItems = () => {
        window.localStorage.clear();
        setValue({});
     };

     return {
        value,
        setItemValue,
        clearItems,
        removeItem,
     }

};

export default useLocalStorage;