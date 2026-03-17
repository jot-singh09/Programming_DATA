import React from "react";

export default function TradeExchange() {
  return (
    <div>
      <div className="min-h-full w-full" style={{ background: "#f1f5f9" }}>
        <main style={{ maxWidth: "1600px", margin: "0 auto", padding: "32px 24px" }}>

          {/* Header */}
          <div
            className="glass-effect fade-in"
            style={{
              padding: "28px 36px",
              borderRadius: "20px",
              border: "2px solid #3b82f6",
              boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
              marginBottom: "28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg,#3b82f6,#10b981)",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(59,130,246,0.25)",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <h1 style={{ fontSize: "36px", fontWeight: 800, margin: 0 }}>
                  Trade Exchange
                </h1>
                <p style={{ opacity: 0.6, marginTop: "6px", fontWeight: 500 }}>
                  HEXA/USDT
                </p>
              </div>
            </div>
          </div>

          {/* Balance Cards */}
          <div
            className="fade-in desktop-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}
          >
            {/* HEXA */}
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "16px",
                border: "2px solid #3b82f6",
              }}
            >
              <div style={{ fontSize: "12px", opacity: 0.6 }}>HEXA Balance</div>
              <div style={{ fontSize: "32px", color: "#3b82f6", fontWeight: 800 }}>
                5.5000
              </div>
              <div style={{ fontSize: "12px", opacity: 0.5 }}>≈ 0.06 USDT</div>
            </div>

            {/* USDT */}
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "16px",
                border: "2px solid #10b981",
              }}
            >
              <div style={{ fontSize: "12px", opacity: 0.6 }}>USDT Balance</div>
              <div style={{ fontSize: "32px", color: "#10b981", fontWeight: 800 }}>
                50,000.00
              </div>
              <div style={{ fontSize: "12px", opacity: 0.5 }}>
                ≈ 5,050,505.05 HEXA
              </div>
            </div>
          </div>

          {/* Trade Panel */}
          <div
            className="fade-in"
            style={{
              background: "#fff",
              padding: "28px",
              borderRadius: "20px",
              border: "2px solid #3b82f6",
            }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800 }}>
              💹 Trade Panel
            </h2>

            <button
              style={{
                width: "100%",
                marginTop: "20px",
                background: "linear-gradient(135deg,#10b981,#059669)",
                color: "#fff",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "17px",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
              }}
            >
              🛒 Place Buy Order
            </button>

            <button
              style={{
                width: "100%",
                marginTop: "16px",
                background: "linear-gradient(135deg,#ef4444,#dc2626)",
                color: "#fff",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "17px",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
              }}
            >
              💰 Place Sell Order
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
