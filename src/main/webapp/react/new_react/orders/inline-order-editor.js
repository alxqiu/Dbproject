// const {useState, useEffect } = React;
// const {Link} = window.ReactRouterDOM;
//
// const InlineOrderEditor = ({order, deleteOrder, updateOrder}) => {
//     const [orderCopy, setOrderCopy] = useState(order)
//     const [editing, setEditing] = useState(false)
//     return(
//         <div>
//             {
//                 editing &&
//                 <div className="row">
//                     <div className="col">
//                         <input
//                             className="form-control"
//                             value={orderCopy.id}
//                             onChange={(e)=>setOrderCopy(OrderCopy => ({...OrderCopy, id: e.target.value}))}/>
//                     </div>
//                     {/*<div className="col">*/}
//                     {/*    <input*/}
//                     {/*        className="form-control"*/}
//                     {/*        value={orderCopy.lastName}*/}
//                     {/*        onChange={(e)=>setUserCopy(userCopy => ({...userCopy, lastName: e.target.value}))}/>*/}
//                     {/*</div>*/}
//                     {/*<div className="col">*/}
//                     {/*    <input*/}
//                     {/*        className="form-control"*/}
//                     {/*        value={userCopy.username}*/}
//                     {/*        onChange={(e)=>setUserCopy(userCopy => ({...userCopy, username: e.target.value}))}/>*/}
//                     {/*</div>*/}
//                     <div className="col-1">
//                         <Link to={`/orders/${orderCopy.id}`}>
//                         </Link>
//                     </div>
//                     <div className="col-2">
//                         <i className="fas fa-2x fa-check float-right margin-left-10px"
//                            onClick={() => {
//                                setEditing(false)
//                                updateOrder(orderCopy.id, orderCopy)
//                            }}></i>
//                         <i className="fas fa-2x fa-undo float-right margin-left-10px"
//                            onClick={() => setEditing(false)}></i>
//                         <i className="fas fa-2x fa-trash float-right margin-left-10px"
//                            onClick={() => deleteOrder(order.id)}></i>
//                     </div>
//                 </div>
//             }
//             {
//                 !editing &&
//                 <div className="row">
//                     <div className="col">
//                         <Link to={`/users/${userCopy.id}`}>
//                             {userCopy.firstName}
//                         </Link>
//                     </div>
//                     <div className="col">
//                         <Link to={`/users/${userCopy.id}`}>
//                             {userCopy.lastName}
//                         </Link>
//                     </div>
//                     <div className="col">
//                         <Link to={`/users/${userCopy.id}`}>
//                             {userCopy.username}
//                         </Link>
//                     </div>
//                     <div className="col-1">
//                         <Link to={`/users/${userCopy.id}/blogs`}>
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
// export default InlineOrderEditor;