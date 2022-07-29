import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    
  });

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    setCountries(data);
   
  };
  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app_body">
              <div className="inputs">
                <div className={`search_input ${darkMode ? "darkMode" : ""}`}>
                  <SearchIcon />
                  <input type="text" placeholder="search for a country..." />
                </div>
                <div className={`select_region ${darkMode ? "darkMode" : ""}`}>
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
                {countries.map((country) => (
                  <Country darkMode={darkMode}
                  key={country.alpha3code}
                  code={country.alpha3code}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                  flag={country.flag}
                  />
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="country-details"
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
