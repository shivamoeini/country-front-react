import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CountryDetails() {
  return (
    <div className="country_details">
      <button className="back">
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>
      <div className="country_deetails_body">
        <div className="img_continer">
          <img src="https://flagcdn.com/as.svg" alt="" />
        </div>

        <div className="info">
          <h2>Name</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Native Name:{" "} <span className="values">Test</span>
              </p>
              <p>
               Region:{" "} <span className="values"></span>
              </p>
              <p>
                Native Name:{" "} <span className="values"></span>
              </p>
              <p>
                Native Name:{" "} <span className="values"></span>
              </p>
            </div>
            <div className="right_info">
            <p>
                Native Name:{" "} <span className="values"></span>
              </p>
              <p>
                Native Name:{" "} <span className="values"></span>
              </p>
              <p>
                Native Name:{" "} <span className="values"></span>
              </p>
              <p>
                Native Name:{" "} <span className="values"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
