// src/App.js
import React from "react";
import { Card, Container, Button } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  // ✅ Put your first name here (leave "" to show "Hello, there!")
  const firstName = "Theresa"; // try: "" to test the fallback

  const hasName = firstName.trim().length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(13,110,253,0.18), transparent 55%), linear-gradient(180deg, #0b1220, #070b12)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: 720 }}>
        <Card
          className="border-0 rounded-5 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
          }}
        >
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <div className="text-uppercase small fw-semibold text-primary">
                  Featured Product
                </div>
              </div>

              <Button
                variant="outline-primary"
                className="rounded-pill px-3"
                onClick={() => alert("Added to cart ✅")}
              >
                Add to Cart
              </Button>
            </div>

            {/* ✅ Card contains all components */}
            <Image />
            <Name />
            <Price />
            <Description />

            <hr className="my-4" />

            {/* ✅ Greeting below the card content */}
            <h5 className="mb-2">
              {hasName ? `Hello, ${firstName}!` : "Hello, there!"}
            </h5>

            {/* ✅ Display an image if first name is provided */}
            {hasName && (
              <div className="d-flex align-items-center gap-3 mt-2">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=60"
                  alt="Profile"
                  width="52"
                  height="52"
                  className="rounded-circle"
                  style={{ objectFit: "cover", border: "2px solid #0d6efd" }}
                />
                <div className="text-muted">
                  Welcome back, <span className="fw-semibold">{firstName}</span>.
                  Ready to shop?
                </div>
              </div>
            )}
          </Card.Body>
        </Card>

        <div className="text-center mt-4" style={{ color: "rgba(255,255,255,0.7)" }}>
          Built with CRA + React-Bootstrap ✨
        </div>
      </Container>
    </div>
  );
}

export default App;
