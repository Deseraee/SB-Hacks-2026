import React, { useState } from "react";

const EmergencyPage = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [location, setLocation] = useState(null);
  const [camouflaged, setCamouflaged] = useState(false);

  const handlePanicClick = () => {
    setStatus("loading"); // start getting location

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          setLocation(coords);
          console.log("Alert sent! Location:", coords);

          // When location is captured, change status to done
          setStatus("done");

          // After 2 seconds, camouflage the page
          setTimeout(() => setCamouflaged(true), 2000);
        },
        () => {
          console.error("Unable to get location.");
          setStatus("idle"); // revert if failed
        }
      );
    }
  };

  if (camouflaged) {
    return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Notes</h1>
        <p>Just catching up on your work...</p>
      </div>
    );
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      background: "#f0f2f5",
    }}>
      <h1>Emergency Page</h1>
      <button
        onClick={handlePanicClick}
        style={{
          background: status === "done" ? "#4caf50" : "linear-gradient(to right, #ff4b2b, #ff416c)",
          color: "white",
          fontSize: "2rem",
          padding: "20px 50px",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.2s",
        }}
      >
        {status === "idle" && "Action"}
        {status === "loading" && "Loading…"}
        {status === "done" && "Done ✅ Help is on the way"}
      </button>

      {location && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          Location captured: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
        </p>
      )}
    </div>
  );
};

export default EmergencyPage;