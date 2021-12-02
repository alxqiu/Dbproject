import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const params = useParams();
    const findOrdersByUser = () =>
        fetch(
            `http://localhost:8080/orm/users/${params.userId}/orders`)
            .then(res => res.json())
            .then(orders => setOrders(orders));
    useEffect(findOrdersByUser, []);
    return(
        <ul>
            {orders.map(order =>
                           <li key={order.orderId}>
                               {order.order}
                           </li>)}
        </ul>
    );};
export default OrderList;