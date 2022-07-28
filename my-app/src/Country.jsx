import React from "react";

function Country({darkMode}) {
  return (
    <div className={`country ${darkMode ? 'darkMode' :""}`}>
      <div className="flag_container">
        <img src="https://flagcdn.com/as.svg" alt="" />
      </div>
      <div className="details">
        <h3 className="name">Name</h3>
        <p>Population:{""} 
        <span className={`values ${darkMode ? 'darkMode' :""}`}>Tes</span>
        </p>
        <p>Region:{""} 
        <span className={`values ${darkMode ? 'darkMode' :""}`}>Tes</span>
        </p>
        <p>Capital:{""} 
        <span className={`values ${darkMode ? 'darkMode' :""}`}>Tes</span>
        </p>
        
      </div>
    </div>
  );
}

export default Country;
