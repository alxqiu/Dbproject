import productService from "./product-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;
const ProductFormEditor = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findProductById(id)
        }
    }, []);
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
        </div>
    )
}

export default ProductFormEditor