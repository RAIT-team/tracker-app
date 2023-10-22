import "./styles/App.css";
import Landingpage from "./landingpage/landingpage.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./loginPage/loginPage.js";
import navBar from "./navBar/navBar";
import SignUpPage from "./signUpPage/signUpPage.js";
import Dashboard from "./dashboard/dashboard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
