import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Masterpage from "./AdminPage/Masterpage/Masterpage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/adminmasterpage"
            name="Admin"
            render={(props) => <Masterpage {...props} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
