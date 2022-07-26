import "./App.css";
import Header from "./Header";
import SearchIcon from '@mui/icons-material/Search';
import Country from "./Country"
import {Routes,Route} from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
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

        }/>
      
      <Route path="country-details" element={<CountryDetails/>} />
      </Routes>
     
    </div>
  );
}

export default App;
