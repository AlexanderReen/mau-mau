import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GamePage from "./pages/Game/GamePage";
//TODO: Implement menu page
import MenuPage from "./pages/Menu/MenuPage";
import './App.scss';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <GamePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
