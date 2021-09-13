import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/contact-form" exact component={ContactForm} />
          <Route path="/(contact-list)?" exact component={ContactList} />
        </Switch>
      </div>
    </>
  );
};

export default App;
