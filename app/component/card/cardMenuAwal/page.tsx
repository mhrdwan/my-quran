import React from "react";

function CardMenuAwal() {
  return (
    <div
      style={{
        backgroundColor: "#475569",
        height: "15vh",
        // width: "100%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <div
          style={{
            backgroundColor: "#34d399",
            color: "#fff",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2em",
            marginBottom: "10px",
          }}
        >
          1
        </div>
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.1em" }}>Al Fatihah</div>
        <div style={{ color: "#cbd5e1" }}>Pembukaan</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start", 
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart"
          style={{ color: "#fff" }}
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>
    </div>
  );
}

export default CardMenuAwal;
