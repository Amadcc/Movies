import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import styled from "styled-components";
import Movies from "./Components/Movies";
import Favorites from "./Components/Favorites";
import { MovieProvider } from "./movie-context";
function App() {
  return (
    <MovieProvider>
      <Router>
        <Switch>
          <Wrapper>
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/favorites">
                    Favorites
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={Movies} />
            <Route path="/favorites" exact component={Favorites} />
          </Wrapper>
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;

const Wrapper = styled.div`
  text-align: center;
  nav ul li {
    display: inline-block;
    margin: 0.5em;
    a.active {
      font-weight: bold;
    }
  }
`;
