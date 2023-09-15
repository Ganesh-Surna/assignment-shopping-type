import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/menu/dashboard/Dashboard";
import MasterDesign from "./components/menu/master-design/MasterDesign";
import ViewDesign from "./components/menu/view-designs/ViewDesign";
import OrderForm from "./components/menu/order-form/OrderForm";
import Customers from "./components/menu/customers/Customers";
import Home from "./components/Home";
import MenuLayout from "./components/menu/MenuLayout";
import "./styles.css";

const router= createBrowserRouter([
  {
    path: "/", element:<RootLayout/>,
    children: [
      {
        index: true, element:<Home/>,
      },
      {
        path:"/menu", element: <MenuLayout/>,
        children: [
          {
            index:true, element: <Dashboard/>,
          },
          {
            path: "/menu/master-design", element: <MasterDesign/>,
          },
          {
            path: "/menu/view-designs", element: <ViewDesign/>,
          },
          {
            path: "/menu/order-form", element: <OrderForm/>,
          },
          {
            path: "/menu/customers", element: <Customers/>,
          },
        ]
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
