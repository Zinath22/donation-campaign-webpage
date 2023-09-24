import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";



const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
     <NavBar></NavBar>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;