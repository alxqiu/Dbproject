const UserList = () => {
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:8080/orm/users/find")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    return(
        <ul>
            { users.map(user =>
                            <li>
                                <Link to=
                                          {`/users/${user.userId}`}>
                                    {user.firstName}
                                </Link>
                            </li>
            )}
        </ul>
    )}
export default UserList;