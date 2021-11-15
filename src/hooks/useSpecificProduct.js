import { useEffect, useState } from "react"

const useSpecificProduct = (id) => {

    const [specificProduct, setSpecificProduct] = useState([]);

    useEffect( () => {
        const url = `https://polar-earth-13486.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSpecificProduct(data);
        })
    }, [id]);
    return [specificProduct];
}

export default useSpecificProduct;