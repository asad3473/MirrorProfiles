import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accounts from "./Pages/Acounts";
import Billings from "./Pages/Billings";
import Academy from "./Pages/Academy";
import MainLayout from "./Pages/MainLayout";
import "./App.css";
import MyHires from "./Pages/MyHires";
import Support from "./Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Accounts /> },
      { path: "/profiles", element: <Accounts /> },
      { path: "/billings", element: <Billings /> },
      { path: "/academy", element: <Academy /> },
      { path: "/hires", element: <MyHires /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
