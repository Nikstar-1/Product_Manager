import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/login.component";
import Dashboard from "./components/dashboard/dashboard";
import Catalogue from "./components/catalogue/catalogue";
import Productcreation from "./components/productcreation/productcreation";
import CatalogueExport from "./components/catalogueexport/catalogueexport";
import ErrorPage from "./components/error/errorpage";

//import Login from "./components/login.component";
//import SignUp from "./components/signup.component";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />

          {/*Rekha*/}
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} /> */}
          <Route path="/profile" component={ProfilePage} />

          <Route path="/login" exact component={Login}/>
          <Route path="/catalogue" exact component={Catalogue} />
          <Route path="/new-product" exact component={Productcreation} />
          <Route path="/export" exact component={CatalogueExport} />
          <Route path="/404" exact component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
