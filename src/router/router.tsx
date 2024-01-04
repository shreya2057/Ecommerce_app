import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";
import Shopping from "../screen/items/Shopping";
import Orders from "../screen/items/Orders";
import Login from "../screen/users/Login";
import SignUp from "../screen/users/Signup";
import UserDetails from "../screen/users/UserDetails";
import HomeScreen from "../screen/Home";
import Carts from "../screen/items/Cart";
import Test from "../screen/users/Test";

function AppRouter(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/shopping" element={<Shopping/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/cart" element={<Carts/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/test" element={<Test/>}/>
                    </Route>
                    
                    
                   
                    
                    <Route path="/userdetails" element={<UserDetails/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;