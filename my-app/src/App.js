import "./App.css";
import Header from "./Header";
import SearchIcon from '@mui/icons-material/Search';
import Country from "./Country"
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <div className="inputs">
          <div className="search_input">
            <SearchIcon/>
            <input type="text" placeholder="search for a country..." />
          </div>
          <div className="select_region">
            <select>
              <option>All</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
             
            </select>
          </div>
        </div>
        <div className="countries">
<Country />
        </div>
      </div>
    </div>
  );
}

export default App;
