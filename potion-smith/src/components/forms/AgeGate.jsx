import { useState } from "react";

function AgeGate({ onVerified }) {
  const [denied, setDenied] = useState(false);

  const handleYes = () => {
    if (onVerified) onVerified(true);
  };

  const handleNo = () => {
    setDenied(true);
  };

  return (
    <div className="age-gate"
    style={{ color:"#ffffff", textAlign: "center", fontFamily: "'Smythe', system-ui" }}>
      {!denied ? (
        <>
          <h1>Welcome to Potion Smith</h1>
          <h3>Are you 21 or older?</h3>
          <div className="age-buttons">
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </>
      ) : (
        <p>Sorry, you must be 21 or older to continue on our website.</p>
      )}
    </div>
  );
}

export default AgeGate;