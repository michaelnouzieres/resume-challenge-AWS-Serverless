import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./pages/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Technology from "./pages/Technology.jsx";
import Links from "./pages/Links.jsx";
import Stats from "./pages/Stats.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "technology", Component: Technology },
        { path: "links", Component: Links },
        { path: "stats", Component: Stats},
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
