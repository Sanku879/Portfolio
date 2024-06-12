import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex">
        <h1>EDUCATION</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-item text-center my-5 " id="Experience"
              data-aos="zoom-in"
              data-aos-duration="1000">
                
                <div className="right">
                  <h2>{data.University_name}</h2>
                  <h4><span style={{ color: "#D5CAE4" }}>
                  {data.Degree}</span></h4>
                  <h4>
                    <span style={{ color: "#E1E5EB" }}>
                      {data.Passout_year} 
                    </span>
                    
                  </h4>

                  <h4>
                    <span style={{ color: "#E59462" }}>
                      {data.Percgntage} 
                    </span>
                    
                  </h4>
                  
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
