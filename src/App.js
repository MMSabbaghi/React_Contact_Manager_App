import { Navbar, ContactList, ContactForm } from "./components";
import { Route, Switch } from "react-router";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Navbar
        isDark={darkMode}
        onToggleMode={() => setDarkMode((pervMode) => !pervMode)}
      />
      <div className="container">
        <Switch>
          <Route path="/contact-form" exact component={ContactForm} />
          <Route path="/(contact-list)?" exact component={ContactList} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
