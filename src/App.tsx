import "./App.css";
import Header from "./components/Layouts/Header";
import Container from "./components/Layouts/Container";
import Footer from "./components/Layouts/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Container />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
