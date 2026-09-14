import { createBrowserRouter, Outlet } from "react-router";
import Home from "./src/pages/Home/page";
import Products from "./src/pages/Products/page";
import Users from "./src/pages/Users/page";
import Tickets from "./src/pages/Tickets/page";
import TicketDetails from "./src/pages/TicketDetails/page";
import Comments from "./src/pages/Comments/page";
import clsx from "clsx";
const isOpen = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        className={clsx(
          "text-center",
          "p-4",
          isOpen ? "bg-green-200" : "bg-red-200",
        )}
      >
        Application Layout
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketId",
        element: <TicketDetails />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
export default router;
