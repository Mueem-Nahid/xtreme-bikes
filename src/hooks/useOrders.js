import { useEffect, useState } from "react"

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://polar-earth-13486.herokuapp.com/orders')
        .then( res => res.json())
        .then(data => setOrders(data))
    } , [orders]);

    return [orders, setOrders];
}

export default useOrders;