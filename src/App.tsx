import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GamePage from "./pages/Game/GamePage";
import MenuPage from "./pages/Menu/MenuPage";
import './App.scss';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MenuPage/>
        </Route>
        <Route path="/game">
          <GamePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
