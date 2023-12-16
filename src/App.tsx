import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {},
    ],
  },
]);

function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
