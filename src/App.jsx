import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Chat from "./components/Chat.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Chat />
            <Footer />
        </>
    )
}

export default App