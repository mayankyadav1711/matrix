import React, { useState, useEffect } from "react";

export const About = (props) => {
  const [counters, setCounters] = useState({
    experienceYears: 0,
    teamSize: 0,
    aum: 0,
    presenceStates: 0,
  });

  useEffect(() => {
    // Set the target values for the counters (change these values as needed)
    const targetValues = {
      experienceYears: 100,
      teamSize: 100,
      aum: 15,
      presenceStates: 5,
    };

    // Increment the counters with a delay
    const incrementCounters = () => {
      setCounters((prevCounters) => ({
        experienceYears:
          prevCounters.experienceYears < targetValues.experienceYears
            ? prevCounters.experienceYears + 1
            : targetValues.experienceYears,
        teamSize:
          prevCounters.teamSize < targetValues.teamSize
            ? prevCounters.teamSize + 1
            : targetValues.teamSize,
        aum:
          prevCounters.aum < targetValues.aum
            ? prevCounters.aum + 1
            : targetValues.aum,
        presenceStates:
          prevCounters.presenceStates < targetValues.presenceStates
            ? prevCounters.presenceStates + 1
            : targetValues.presenceStates,
      }));
    };

    // Update counters every 100 milliseconds
    const counterInterval = setInterval(incrementCounters, 60);

    // Cleanup interval on component unmount
    return () => clearInterval(counterInterval);
  }, []);
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p className="text-justify">{props.data ? props.data.paragraph : "loading..."}</p>

              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row" style={{ marginTop: "4rem" }}>
  <div className="col-md-3 text-center">
    <div className="counter">
      <i className="fa fa-clock-o fa-3x"></i>
      <p
        className="timer"
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#007BFF",
          marginBottom: "0.25rem",
        }}
      >
        {counters.experienceYears}
      </p>
      <p
        className="counter-label"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Experience Years
      </p>
      
    </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="counter">
      <i className="fa fa-users fa-3x"></i>
      <p
        className="timer"
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#007BFF",
          marginBottom: "0.25rem",
        }}
      >
        {counters.teamSize} L
      </p>
      <p
        className="counter-label"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Team Size
      </p>
      
    </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="counter">
      <i className="fa fa-money fa-3x"></i>
      <p
        className="timer"
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#007BFF",
          marginBottom: "0.25rem",
        }}
      >
        {counters.aum}
      </p>
      <p
        className="counter-label"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        AUM (in Cr)
      </p>
      
    </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="counter">
      <i className="fa fa-map-marker fa-3x"></i>
      <p
        className="timer"
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#007BFF",
          marginBottom: "0.25rem",
        }}
      >
        {counters.presenceStates}
      </p>
      <p
        className="counter-label"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Presence (States)
      </p>
      
    </div>
  </div>
</div>


      </div>
    </div>
  );
};
