import "./css/Main.css";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import AuthTokenHandler from "./controllers/authTokenHandler";
import AuthTokenHandler2 from "./controllers/AuthTokenHandler2";
import { useCookies } from "react-cookie";
import GitHubLoginscreen from "./screens/GitHubLoginscreen";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { token, githubUsername } = cookies;

  // if (!githubUsername && token) {
  //   removeCookie("token");
  //   console.log("here");
  //   window.location.replace(`http://localhost:3000/oauth?token=${token}`);
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <Route path="/" element={<Homescreen />} />
          ) : (
            <Route path="/" element={<Loginscreen />} />
          )}
          <Route path="/oauth" element={<AuthTokenHandler />} />
          <Route path="/github/username" element={<AuthTokenHandler2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
