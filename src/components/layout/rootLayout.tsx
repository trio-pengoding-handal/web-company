import { Outlet } from "react-router";
import Navbar from "../shared/navbar";


export default function RootLayout() {
    return (
        <div className="w-full" data-theme="silk">
            <Navbar/>
            <div className="w-full mt-20">
                <Outlet/>
            </div>
        </div>
    )
}