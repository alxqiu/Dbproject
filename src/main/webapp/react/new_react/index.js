import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import OrderList from "./orders/order-list";
import OrderFormEditor from "./orders/order-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="both-lists">

            <div className="container-fluid">
                <HashRouter>
                    <Route path={["/users", "/"]} exact={true}>
                        <UserList/>
                    </Route>
                    <Route path="/users/find/:id" exact={true}>
                        <UserFormEditor/>
                    </Route>
                </HashRouter>

            </div>
            <div className="container-fluid">
                <HashRouter>
                    <Route path={["/orders", "/"]} exact={true}>
                        <OrderList/>
                    </Route>
                    <Route path="/orders/find/:id" exact={true}>
                        <OrderFormEditor/>
                    </Route>
                </HashRouter>

            </div>
        </div>
    );
}

export default App;
