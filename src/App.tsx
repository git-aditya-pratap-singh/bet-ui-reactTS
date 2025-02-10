
import { RouterProvider } from "react-router-dom";
import router from "./app/_routes/app.routes";

const App = ()=> {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
