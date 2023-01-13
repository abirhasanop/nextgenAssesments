import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Context } from "./Contexts/Contexts";
import { router } from "./Router/router";

function App() {
  const { dark } = useContext(Context)

  return <div className={`${dark ? "bg-[#0F1729]" : "bg-[#F4F4F4]"} min-h-screen`}>
    <RouterProvider router={router} />
  </div>;
}

export default App;
