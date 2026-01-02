import React from "react";

const Error = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h1
        style={{ fontSize: "72px", margin: "20px 0", color: "rgb(33, 33, 33)" }}
      >
        404
      </h1>
      <p
        style={{ fontSize: "24px", margin: "20px 0", color: "rgb(33, 33, 33)" }}
      >
        Page Not Found
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "rgb(100, 100, 100)",
          margin: "20px 0 40px",
        }}
      >
        The page you're looking for doesn't exist.
      </p>
      <button
        className="button-primary"
        onClick={() => (window.location.href = "/")}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
