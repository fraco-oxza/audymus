import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components import
import Bar from "./components/Bar";
import Songs from "./Songs";
import AddSong from "./AddSong";

// Pages
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/app">
          <div className="App">
            <Bar />
            <Songs />
            <AddSong />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
