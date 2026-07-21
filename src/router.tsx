import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/rootLayout";
import HomePage from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: "/test-tailwind",
    Component: () => <p className="text-yellow-400 font-bold">test</p>,
  },
],);
