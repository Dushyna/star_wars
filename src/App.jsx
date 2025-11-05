import './App.css'
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx"
import {useState} from "react";
import {navItems} from "./utils/constants.js";
import {Context} from "./utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);
    const changePage = (page) => {
        setPage(page);
    };
    return (
        <div className="container-fluid all">
            <Context value={{page, changePage}} >
                <Header />
                <Main />
        </Context>
    <Footer/>
</div>
)
}

export default App
