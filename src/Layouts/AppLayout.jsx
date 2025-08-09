import { Footer } from "../UI/Footer";
import { Header } from "../UI/Headers";
import { Outlet } from "react-router-dom";
import "../UI/header.css";
import "../App.css";
import "../UI/footer.css"


export const AppLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            < Footer />

        </>
    );
}