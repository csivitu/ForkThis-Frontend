import "./css/Main.css";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import AuthTokenHandler from "./controllers/AuthTokenHandler";
import { useCookies,  } from "react-cookie"

function App() {
  const [cookies] = useCookies(['token'])
  const {token} = cookies;
  return (
    <>
    <BrowserRouter>
      <Routes>
        {
          token?<Route path="/" element={ <Homescreen />}/>:<Route path="/" element={ <Loginscreen />}/>
        }
        <Route path="/oauth" element={<AuthTokenHandler/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
