import UserList from "./UserList";
import {BrowserRouter, Routes, Route}
    from "react-router-dom";
import OrderList from "./OrderList";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<UserList/>}/>
                <Route path="/users/:userId"
                       element={<OrderList/>}/>
            </Routes>
        </BrowserRouter>
    );}
export default App;