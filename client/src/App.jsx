import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={user ? <Navigate replace to="/"/> : <Login />}/>
            {/* If user is logged in, then redirect to home page, else go to login page */}
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/Success" element={<Success/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
          <Route exact path="/products/:category" element={<ProductList/>}/>
          <Route exact path="/register" element={ user? <Navigate to="/"/> : <Register/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
