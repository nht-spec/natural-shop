import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Route, Switch } from "react-router";
import CategoryFeature from "./features/Category";
import Header from "./features/header";
import ProductFeature from "./features/Product";
import HomeFeatures from "./features/ProductforHome";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/products' component={ProductFeature}/>
        <Route path='/category' component={CategoryFeature}/>
        <Route path='/productforhome' component={HomeFeatures}/>
      </Switch>
      <MessengerCustomerChat   pageId="103977878530075"  appId="1658852460972444"/>
    </div>
  );
}

export default App;
