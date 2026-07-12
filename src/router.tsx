import { createBrowserRouter } from "react-router";
import App from "./App";

export const router = createBrowserRouter([{
    path: '/',
    Component: App
},{
    path: '/test-tailwind',
    Component: () => <p className="text-yellow-400 font-bold">test</p>
}])