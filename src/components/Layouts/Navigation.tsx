import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="nav">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
    );
};

export default Navigation;
