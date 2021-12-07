import userService from "./user-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findUserById(id)
        }
    }, []);
    const findUserById = (id) =>
        userService.findUserById(id).then(user => setUser(user))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.back())
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.back())
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.back())
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, firstName: e.target.value}))}
                   value={user.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, lastName: e.target.value}))}
                   value={user.lastName}/><br/>
            <label>Username</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, username: e.target.value}))}
                   value={user.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, password: e.target.value}))}
                   value={user.password}/><br/>

            <form> Role: <br/>
                <input type="radio"
                       name="role"
                       value={user.role}
                       defaultChecked checked = {user.role === "CUSTOMER"}
                       onChange={() => setUser(user =>
                                                   ({...user, role: "CUSTOMER"}))}/>
                Customer <br/>

                <input type="radio"
                       name="role"
                       value={user.role}
                       defaultChecked checked = {user.role === "EMPLOYEE"}
                       onChange={() => setUser(user =>
                                                   ({...user, role: "EMPLOYEE"}))}/>
                Employee <br/>

                <input type="radio"
                       name="role"
                       value={user.role}
                       defaultChecked checked = {user.role === "MANAGER"}
                       onChange={() => setUser(user =>
                                                   ({...user, role: "MANAGER"}))}/>
                Manager
            </form>

            <label>Email</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, email: e.target.value}))}
                   value={user.email}/><br/>
            <label>Birthday</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, dateOfBirth: e.target.value}))}
                   value={user.dateOfBirth}/><br/>
            <button className="btn btn-dark"
                    onClick={() => {
                        history.back()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createUser(user)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateUser(user.id, user)}>
                Save
            </button>
        </div>
    )
}

export default UserFormEditor