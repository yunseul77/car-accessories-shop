import logo from './assets/logo.svg';
import './styles/App.css';
import {Route, Router, Routes} from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />}>
          <Route
            path={"sellers"} element={}}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
