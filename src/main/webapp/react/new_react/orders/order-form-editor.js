import orderService from "./order-service"
import userService from "../users/user-service"
import UserFormEditor from "../users/user-form-editor";

const {useState, useEffect, Dropdown} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const OrderFormEditor = () => {
    const reactRouterHistory = useHistory()
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findOrderById(id)
        }
    }, []);
    const findOrderById = (id) =>
        orderService.findOrderById(id).then(order => setOrder(order))

    // for accessing all users
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))

    const getOrderUser = (id) =>
         userService.findUserById(id).then(() => reactRouterHistory.push(`/users/find/${id}`))
    // const processUsers = async () =>
    //     JSON.parse(await userService.findAllUsers())
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
            {/*<label>Customer Id</label>*/}
            {/*<input onChange={(e) =>*/}
            {/*    setOrder(order =>*/}
            {/*        ({...order, customerId: e.target.value}))}*/}
            {/*       value={order.customerId}/><br/>*/}

            <label>Customer ID</label>
            <select onChange = {(e) =>
                setOrder(order =>
                    ({...order, customerId: e.target.value}))}
                    value={order.customerId}>
                {
                    users.map((user) => <option key={user.id} value={user.id}> {user.id}</option>)
                }
            </select>
            <br/>
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
            <button className="btn btn-secondary"
                    onClick={() => getOrderUser(order.customerId)}>
                User
            </button>
        </div>
    )
}

export default OrderFormEditor