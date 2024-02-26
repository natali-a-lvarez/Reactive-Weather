import React, { useState } from "react";

function Form({ location, updateLocation, cities }) {
  const [typedLocation, setTypedLocation] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!cities.find((city) => city.city === typedLocation)) {
      setError("City not found");
      return;
    }

    updateLocation(typedLocation);
    setError("");
    setTypedLocation("");
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="city">
            City:
            <input
              onChange={(e) => setTypedLocation(e.target.value)}
              value={typedLocation}
              type="text"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </>
  );
}

export default Form;
