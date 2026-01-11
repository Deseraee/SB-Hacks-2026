import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            latitude: 34.4140 + (Math.random() - 0.5) * 0.01,
            longitude: -119.8489 + (Math.random() - 0.5) * 0.01,
            isMock: true
          };
          setLocation(mockCoords);
          console.log("Simulated alert sent! Location:", mockCoords);
          setStatus("done");
          setTimeout(() => setCamouflaged(true), 10);
        }, 20);
        return;
      }
    }

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
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
          setStatus("done");
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
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
        {/* BACK BUTTON #2 */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-4 px-8 shadow-sm">
          <Link 
            to="/"
            className="text-orange-800 hover:text-orange-900 font-semibold text-2xl flex items-center gap-2" 
            style={{fontFamily: 'Mali'}}
          >
            ← Back to Home
          </Link>
        </div>
        
        <div style={{ 
          padding: "2rem", 
          fontFamily: "'Mali', cursive, sans-serif",
          background: "#fffbeb",
          fontSize: "3rem",
          minHeight: "calc(100vh - 73px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}> Notes</h1>
          <p style={{ fontSize: "2.5rem" }}>Just catching up on your work...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* BACK BUTTON #1 - On Main Emergency Page */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-4 px-8 shadow-sm">
        <Link 
          to="/"
          className="text-orange-800 hover:text-orange-900 font-semibold text-2xl flex items-center gap-2" 
          style={{fontFamily: 'Mali'}}
        >
          ← Back to Home
        </Link>
      </div>
  
      {/* Small Flower Button - Fixed to Bottom Left Side */}
<div style={{ 
  position: "fixed", 
  left: "2rem", 
  bottom: "2rem",  // Changed from top to bottom
  transform: "none", // Removed translateY since we're using bottom
  width: "100px", 
  height: "100px",
  zIndex: 50,
  cursor: "pointer" // Added cursor for better UX
}}>
  {/* Petals */}
  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          backgroundColor: "#fda4af",
          borderRadius: "50%",
          transform: `rotate(${i * 60}deg) translateY(-30px)`,
        }}
      />
    ))}
  </div>
        
        {/* Center Circle Button */}
        <button
          onClick={() => alert("Info: This emergency button sends your location to trusted contacts")}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "50px",
            height: "50px",
            backgroundColor: "#fb7185",
            borderRadius: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.15)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"}
        >
        </button>
      </div>
      
      <div style={{
        height: "calc(100vh - 73px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "'Mali', cursive, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}>
        {/* Rest of your existing code stays exactly the same */}
        <h1 style={{ 
          fontSize: "4rem", 
          marginBottom: "1.5rem", 
          color: "#7a4e3a",
          fontWeight: "bold"
}}>
  Emergency Page
</h1>
        
        {/* Description */}
        <div style={{
          maxWidth: "700px",
          backgroundColor: "#fef3c7",
          padding: "1.5rem 2rem",
          borderRadius: "15px",
          marginBottom: "2.5rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          border: "2px solid #fbbf24"
        }}>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#92400e",
            lineHeight: "1.8",
            margin: 0
          }}>
             In case of emergency, press the button below to send your location to trusted contact and activate camouflage mode for your safety.
          </p>
        </div>

        
        
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
          {status === "idle" && "Action"}
          {status === "loading" && "Getting Location..."}
          {status === "done" && "Help is Coming!"}
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
               Location Captured
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
    </div>
  );
};

export default EmergencyPage;