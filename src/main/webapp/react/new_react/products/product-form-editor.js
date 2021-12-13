import productService from "./product-service"
import orderService from "../orders/order-service";

const {useState, useEffect} = React;
const {useParams,useHistory} = window.ReactRouterDOM;
const ProductFormEditor = () => {
    const reactRouterHistory = useHistory()
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findProductById(id)
        }
    }, []);

    //for accessing orders of a product
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findAllOrders(id)
        }
    }, [])
    const findAllOrders = (id) =>
        productService.findAllOrdersById(id)
            .then(orders => setOrders(orders))

    const findProductById = (id) =>
        productService.findProductById(id).then(product => setProduct(product))
    const deleteProduct = (id) =>
        productService.deleteProduct(id)
            .then(() => history.back())
    const createProduct = (product) =>
        productService.createProduct(product)
            .then(() => history.back())
    const updateProduct = (id, newProduct) =>
        productService.updateProduct(id, newProduct)
            .then(() => history.back())
    return (
        <div>
            <h2>Product Editor</h2>
            <label>Id</label>
            <input value={product.id}/><br/>
            <label>Name</label>
            <input onChange={(e) =>
                setProduct(product =>
                    ({...product, name: e.target.value}))}
                   value={product.name}/><br/>
            <label>Price</label>
            <input onChange={(e) =>
                setProduct(product =>
                    ({...product, price: e.target.value}))}
                value={product.price}/><br/>
            <label>Quantity</label>
            <input onChange={(e) =>
                setProduct(product =>
                    ({...product, quantity: e.target.value}))}
                   value={product.quantity}/><br/>
            <label>Password</label>

            <button className="btn btn-dark"
                    onClick={() => {
                        history.back()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => createProduct(product)}>
                Create
            </button>
            <button className="btn btn-primary"
                onClick={() => updateProduct(product.id, product)}>
                Save
            </button>

            <ul className="list-group">
                All Orders
                {
                    orders.map(order =>
                                     <li className="list-group-item"
                                         key={order.id}>

                                         <text>
                                             {"ID: " + order.id + " "}
                                             {" OrderID: "}{order.userId}
                                             {" "}
                                         </text>

                                         <button className="btn btn-secondary"
                                                 onClick={() => reactRouterHistory.push(
                                                     `/orders/find/${order.id}`)}>
                                             Edit Order
                                         </button>
                                     </li>)
                }
            </ul>

        </div>
    )
}

export default ProductFormEditor