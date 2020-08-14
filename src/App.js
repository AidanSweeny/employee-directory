import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./components/Directory";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/employee-directory" component={Directory} />
      </div>
    </Router>
  );
}

export default App;
