import React, { useState } from "react";

const EmergencyPage = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [location, setLocation] = useState(null);
  const [camouflaged, setCamouflaged] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePanicClick = () => {
    setStatus("loading"); 
    setErrorMessage("");

    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
    
    if (!isLocalhost && window.location.protocol !== 'https:') {
      const useMock = window.confirm(
        "For better geolocation accuracy, HTTPS is recommended.\n\n" +
        "Click OK to use a simulated location for testing, or Cancel to try real geolocation anyway."
      );
      
      if (useMock) {
        setTimeout(() => {
          const mockCoords = {
            latitude: 34.4140 + (Math.random() - 0.5) * 0.01, // Santa Barbara area
            longitude: -119.8489 + (Math.random() - 0.5) * 0.01,
            isMock: true
          };
          setLocation(mockCoords);
          console.log("Simulated alert sent! Location:", mockCoords);
          setStatus("done");
          setTimeout(() => setCamouflaged(true), 2000);
        }, 1500);
        return;
      }
    }

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 10000, // 10 seconds timeout
        maximumAge: 0 // Don't use cached position
      };

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: pos.coords.accuracy
          };
          setLocation(coords);
          console.log("Alert sent! Location:", coords);

          // When location is captured, change status to done
          setStatus("done");

          // After 2 seconds, camouflage the page
          setTimeout(() => setCamouflaged(true), 2000);
        },
        (error) => {
          console.error("Geolocation error:", error);
          
          let message = "Unable to get location. ";
          switch(error.code) {
            case error.PERMISSION_DENIED:
              message += "Location permission was denied. Please allow location access in your browser settings.";
              break;
            case error.POSITION_UNAVAILABLE:
              message += "Location information is unavailable. Check your internet connection or GPS.";
              break;
            case error.TIMEOUT:
              message += "Location request timed out. Please try again.";
              break;
            default:
              message += "An unknown error occurred.";
          }
          
          setErrorMessage(message);
          setStatus("idle");
          
          
          setTimeout(() => {
            const retry = window.confirm(
              `${message}\n\nWould you like to use a simulated location for demonstration?`
            );
            if (retry) {
              const mockCoords = {
                latitude: 34.4140 + (Math.random() - 0.5) * 0.01,
                longitude: -119.8489 + (Math.random() - 0.5) * 0.01,
                isMock: true
              };
              setLocation(mockCoords);
              setStatus("done");
              setTimeout(() => setCamouflaged(true), 2000);
            }
          }, 100);
        },
        options
      );
    } else {
      setErrorMessage("Geolocation is not supported by your browser.");
      setStatus("idle");
    }
  };

  if (camouflaged) {
    return (
      <div style={{ 
        padding: "2rem", 
        fontFamily: "'Mali', cursive, sans-serif",
        background: "#f0f2f5",
        fontSize: "3rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}> Notes</h1>
        <p style={{ fontSize: "2.5rem" }}>Just catching up on your work...</p>
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
      fontSize: "2rem",
      fontFamily: "'Mali', cursive, sans-serif",
      background: "#f0f2f5",
      padding: "2rem",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "3rem", color: "#7a4e3a" }}>
        Emergency Page
      </h1>
      
      <button
        onClick={handlePanicClick}
        style={{
          background: status === "done" ? "#4caf50" : 
                     status === "loading" ? "#ff9800" : "linear-gradient(to right, #ff4b2b, #ff416c)",
          color: "white",
          fontSize: "3rem",
          padding: "25px 60px",
          border: "none",
          borderRadius: "30px",
          cursor: status === "loading" ? "wait" : "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s",
          fontFamily: "'Mali', cursive, sans-serif",
          fontWeight: 600,
          marginBottom: "2rem",
          minWidth: "300px",
        }}
        disabled={status === "loading"}
      >
        {status === "idle" && "🚨 Action"}
        {status === "loading" && "📍 Getting Location..."}
        {status === "done" && "✅ Help is Coming!"}
      </button>

      {errorMessage && (
        <div style={{ 
          marginTop: "1rem", 
          color: "#d32f2f",
          backgroundColor: "#ffebee",
          padding: "1rem 2rem",
          borderRadius: "10px",
          fontSize: "1.5rem",
          maxWidth: "600px",
          marginBottom: "1rem"
        }}>
          ⚠️ {errorMessage}
        </div>
      )}

      {location && (
        <div style={{ 
          marginTop: "2rem", 
          backgroundColor: "#e8f5e9",
          padding: "1.5rem 3rem",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}>
          <p style={{ 
            color: "#2e7d32", 
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "0.5rem"
          }}>
            📍 Location Captured
          </p>
          <p style={{ 
            color: "#1b5e20",
            fontSize: "1.5rem",
            fontFamily: "monospace"
          }}>
            {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
            {location.isMock && (
              <span style={{ 
                display: "block", 
                fontSize: "1.2rem", 
                color: "#f57c00",
                marginTop: "0.5rem"
              }}>
                (Simulated location for demonstration)
              </span>
            )}
          </p>
        </div>
      )}

      <div style={{ 
        marginTop: "3rem", 
        fontSize: "1.2rem", 
        color: "#666",
        maxWidth: "600px",
        lineHeight: "1.6"
      }}>
      </div>
    </div>
  );
};

export default EmergencyPage;