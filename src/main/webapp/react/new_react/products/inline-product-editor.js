// const {useState, useEffect } = React;
// const {Link} = window.ReactRouterDOM;
//
// const InlineProductEditor = ({product, deleteProduct, updateProduct}) => {
//     const [productCopy, setProductCopy] = useState(product)
//     const [editing, setEditing] = useState(false)
//     return(
//         <div>
//             {
//                 editing &&
//                 <div className="row">
//                     <div className="col">
//                         <input
//                             className="form-control"
//                             value={productCopy.quantity}
//                             onChange={(e)=>setProductCopy(productCopy => ({...productCopy, quantity: e.target.value}))}/>
//                     </div>
//                     <div className="col">
//                         <input
//                             className="form-control"
//                             value={productCopy.product_id}
//                             onChange={(e)=>setProductCopy(productCopy => ({...productCopy, product_id: e.target.value}))}/>
//                     </div>
//                     <div className="col">
//                         <input
//                             className="form-control"
//                             value={productCopy.order_id}
//                             onChange={(e)=>setProductCopy(productCopy => ({...productCopy, order_id: e.target.value}))}/>
//                     </div>
//                     <div className="col-1">
//                         <Link to={`/products/${productCopy.id}/blogs`}>
//                             Blogs
//                         </Link>
//                     </div>
//                     <div className="col-2">
//                         <i className="fas fa-2x fa-check float-right margin-left-10px"
//                            onClick={() => {
//                                setEditing(false)
//                                updateProduct(productCopy.id, productCopy)
//                            }}></i>
//                         <i className="fas fa-2x fa-undo float-right margin-left-10px"
//                            onClick={() => setEditing(false)}></i>
//                         <i className="fas fa-2x fa-trash float-right margin-left-10px"
//                            onClick={() => deleteProduct(product.id)}></i>
//                     </div>
//                 </div>
//             }
//             {
//                 !editing &&
//                 <div className="row">
//                     <div className="col">
//                         <Link to={`/products/${productCopy.id}`}>
//                             {productCopy.firstName}
//                         </Link>
//                     </div>
//                     <div className="col">
//                         <Link to={`/products/${productCopy.id}`}>
//                             {productCopy.lastName}
//                         </Link>
//                     </div>
//                     <div className="col">
//                         <Link to={`/products/${productCopy.id}`}>
//                             {productCopy.productname}
//                         </Link>
//                     </div>
//                     <div className="col-1">
//                         <Link to={`/products/${productCopy.id}/blogs`}>
//                             Blogs
//                         </Link>
//                     </div>
//                     <div className="col-2">
//                         <i className="fas fa-cog fa-2x float-right"
//                            onClick={() => setEditing(true)}></i>
//                     </div>
//                 </div>
//             }
//         </div>
//     )
// }
//
// export default InlineProductEditor;