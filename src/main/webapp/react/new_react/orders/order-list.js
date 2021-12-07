import userService from "./order-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const OrderList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/users/find/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li className="list-group-item"
                            key={user.id}>
                            <Link to={`/users/find/${user.id}`}>
                                {user.firstName},
                                {user.lastName},
                                {user.username}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default OrderList;