// TODO: declare URL where server listens for HTTP requests
const ORDERS_URL = "http://localhost:8080/orm/orders"

// TODO: retrieve all orders from the server
export const findAllOrders = () => {
    return fetch(ORDERS_URL +"/").then(response => response.json())
}


// TODO: retrieve a single user by their ID
export const findOrderById = (id) => {
    return fetch(`${ORDERS_URL}/find/${id}`)
        .then(response => response.json())
}

// TODO: delete a user by their ID
export const deleteUser = (id) => {
    return fetch(`${ORDERS_URL}/delete/${id}`, {
        method: "DELETE"
    })
}

// TODO: create a new user
export const createUser = (user) => {
    return fetch(ORDERS_URL + "/create",{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

// TODO: update a user by their ID
export const updateUser = (id, user) => {
    return fetch(`${ORDERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

// TODO: export all functions as the API to this service
export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}
