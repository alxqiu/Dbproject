// declare URL where server listens for HTTP requests
const ORDERS_URL = "http://localhost:8080/orm/orders"
const USERS_URL = "http://localhost:8080/orm/users"

// retrieve all orders from the server
export const findAllOrders = () => {
    return fetch(ORDERS_URL + "/find").then(response => response.json())
}


// retrieve a single user by their ID
export const findOrderById = (id) => {
    return fetch(`${ORDERS_URL}/find/${id}`)
        .then(response => response.json())
}
// // find order(s) by a given user
// export const findOrdersByUser = (userId) => {
//     return fetch(`${USERS_URL}/${userId}/orders`)
//         .then(response => response.json())

// delete an order by its ID
    export const deleteOrder = (id) => {
        return fetch(`${ORDERS_URL}/delete/${id}`, {
            method: "DELETE"
        })
    }

// create a new order
    export const createOrder = (order) => {
        return fetch(ORDERS_URL + "/create", {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }

// update an order by its ID
    export const updateOrder = (id, order) => {
        return fetch(`${ORDERS_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }

// export all functions as the API to this service
    export default {
        findAllOrders,
        findOrderById,
        // findOrdersByUser,
        deleteOrder,
        createOrder,
        updateOrder
}
