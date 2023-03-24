import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/style/Login";
import Channel from "./component/Channel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Register />
          </Route>
          <Route path={"/login"} exact>
            <Login />
          </Route>
          <Route path={"/channel"} exact>
            <Channel />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
