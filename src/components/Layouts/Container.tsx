import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import TodoApp from "../Todo/TodoApp";
import PostApp from "../Post/PostApp";
import ProductList from "../Product/ProductList";
import AddProduct from "../Product/AddProduct";

const Container = () => {
    return (
        <div className="container">
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/todos" element={<TodoApp />}></Route>
                    <Route path="/posts" element={<PostApp />}></Route>
                    <Route path="/products" element={<ProductList />}></Route>
                    <Route
                        path="/products/addProduct"
                        element={<AddProduct />}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
};
export default Container;
