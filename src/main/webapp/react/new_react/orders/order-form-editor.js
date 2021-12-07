import orderService from "./order-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;
const OrderFormEditor = () => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findOrderById(id)
        }
    }, []);
    const findOrderById = (id) =>
        orderService.findOrderById(id).then(order => setOrder(order))
    const deleteOrder = (id) =>
        orderService.deleteOrder(id)
            .then(() => history.back())
    const createOrder = (order) =>
        orderService.createOrder(order)
            .then(() => history.back())
    const updateOrder = (id, newOrder) =>
        orderService.updateOrder(id, newOrder)
            .then(() => history.back())
    return (
        <div>
            <h2>Order Editor</h2>
            {/*<label>Id</label>*/}
            {/*<input value={order.id}/><br/>*/}
            <label>Id</label>
            <input onChange={(e) =>
                setOrder(order =>
                    ({...order, id: e.target.value}))}
                   value={order.id}/><br/>
            <label>Customer Id</label>
            <input onChange={(e) =>
                setOrder(order =>
                    ({...order, customerId: e.target.value}))}
                   value={order.customerId}/><br/>
            <button className="btn btn-dark"
                    onClick={() => {
                        history.back()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteOrder(order.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => createOrder(order)}>
                Create
            </button>
            <button className="btn btn-primary"
                onClick={() => updateOrder(order.id, order)}>
                Save
            </button>
        </div>
    )
}

export default OrderFormEditor