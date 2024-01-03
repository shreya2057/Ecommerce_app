import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";
import BuyItems from "../screen/items/BuyItems";
import Cart from "../screen/items/Cart";
import FavouriteItems from "../screen/items/Favourite";
import Login from "../screen/users/Login";
import SignUp from "../screen/users/Signup";
import UserDetails from "../screen/users/UserDetails";

function AppRouter(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/buyitems" element={<BuyItems/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/favourite" element={<FavouriteItems/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/userdetails" element={<UserDetails/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;