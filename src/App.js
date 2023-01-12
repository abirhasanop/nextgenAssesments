import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/router";

function App() {
  return <div className="bg-[#F4F4F4] min-h-screen">
    <RouterProvider router={router} />
  </div>;
}

export default App;
