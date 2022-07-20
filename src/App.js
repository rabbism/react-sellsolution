import "./admin.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import SlideNav from "./components/SlideNav/SlideNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StartMenuBar from "./components/DashboardComponent/StartMenuBar/StartMenuBar";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Courier from "./Pages/Courier/Courier";
import ProductCategory from "./Pages/Products/ProductCategory/ProductCategory";
import BulkSms from "./Pages/BulkSms/BulkSms";
import Customer from "./Pages/Customers/Customer";
import Offer from "./Pages/Offer/Offer";
import Plugins from "./Pages/Plugins/Plugins";
import Inventory from "./Pages/Stock/Inventory/Inventory";
import StockIn from "./Pages/Stock/StockIn/StockIn";
import ProductReturn from "./Pages/Stock/ProductReturn/ProductReturn";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      {/* <SlideNav></SlideNav>
      <StartMenuBar></StartMenuBar> */}
      <Switch>
        <Route exact path="/">
          {/* <Login></Login> */}
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/dashboard">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/orders">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Orders></Orders>
        </Route>
        <Route exact path="/courier">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Courier></Courier>
        </Route>
        <Route exact path="/product">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Products></Products>
        </Route>
        <Route exact path="/add_category">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <ProductCategory></ProductCategory>
        </Route>
        <Route exact path="/bulk_sms">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <BulkSms></BulkSms>
        </Route>
        <Route exact path="/customer">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Customer></Customer>
        </Route>
        <Route exact path="/offer">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Offer></Offer>
        </Route>
        <Route exact path="/inventory">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Inventory></Inventory>
        </Route>
        <Route exact path="/stock_in">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <StockIn></StockIn>
        </Route>
        <Route exact path="/product_return">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <ProductReturn></ProductReturn>
        </Route>
        <Route exact path="/plugins">
          <SlideNav></SlideNav>
          <StartMenuBar></StartMenuBar>
          <Plugins></Plugins>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
