import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <Link to="/home">Demo Logo</Link>
                    </div>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
