import { useEffect } from "react";

export default function App() {
  const tokens = [
    { id: "TKN-001", date: "2024-01-15", amount: "$75.00", status: "complete" },
    { id: "TKN-002", date: "2024-01-15", amount: "$75.00", status: "complete" },
    { id: "TKN-003", date: "2024-01-15", amount: "$75.00", status: "complete" },
    { id: "TKN-004", date: "2024-01-15", amount: "$75.00",  status: "pending" },
  ];

  const showNotification = () => {
    const notif = document.createElement("div");
    notif.className = "notification";
    notif.innerText = "Trade successful";

    document.body.appendChild(notif);

    setTimeout(() => {
      notif.classList.add("hide");
      setTimeout(() => notif.remove(), 400);
    }, 2500);
  };

  useEffect(() => {
    if (!document.getElementById("notif-style")) {
      const style = document.createElement("style");
      style.id = "notif-style";
      style.innerHTML = `
        .notification {
          position: fixed;
          top: 24px;
          right: 24px;
          background: #10b981;
          color: white;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          animation: slideIn 0.4s ease;
          z-index: 9999;
        }
        .notification.hide {
          animation: slideOut 0.4s ease forwards;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOut {
          to { opacity: 0; transform: translateX(80px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {/* ===== CSS ===== */}
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #f1f5f9;
          font-family: 'Segoe UI', sans-serif;
        }

        .container {
          max-width: 420px;
          margin: auto;
          padding: 16px;
        }

        /* TOP BUTTON */
        .top-btn {
          width: 100%;
          padding: 18px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #6366f1, #10b981);
          margin-bottom: 18px;
        }

        /* CARD */
        .card {
          background: white;
          border-radius: 18px;
          padding: 16px;
          border: 2px solid #c7d2fe;
          margin-bottom: 16px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          gap: 12px;
        }

        .label {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 1px;
        }

        .value {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          text-align: right;
          word-break: break-word;
        }

        .token {
          background: #eef2ff;
          color: #6366f1;
          padding: 6px 12px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 13px;
        }

        .amount {
          color: #10b981;
          font-weight: 800;
        }

        .status {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 800;
        }

        /* Complete status */
           
        .complete {
          background: #d1fae5;
          color: #10b981;
        }

       
        /* pending status */
        
        .pending {
          background: #fee2e2;
          color: #ef4444;
        }

        /* TRADE BUTTON */
        .trade-btn {
          width: 100%;
          margin-top: 8px;
          padding: 14px;
          font-size: 15px;
          font-weight: 800;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          color: white;
          background: linear-gradient(135deg, #6366f1, #10b981);
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .container {
            max-width: 900px;
          }

          .card {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            align-items: center;
            gap: 16px;
          }

          .row {
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
          }
          .prow {
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
          }

          .trade-btn {
            grid-column: span 5;
            max-width: 220px;
            justify-self: end;
          }
        }
      `}</style>

      {/* ===== UI ===== */}
      <div className="container">
        <button className="top-btn" onClick={showNotification}>
          Trade Now
        </button>

        {tokens.map((t) => (
          <div className="card" key={t.id}>
            <div className="row">
              <span className="label">TOKEN ID</span>
              <span className="token">{t.id}</span>
            </div>

            <div className="row">
              <span className="label">DATE</span>
              <span className="value">{t.date}</span>
            </div>

            <div className="row">
              <span className="label">AMOUNT</span>
              <span className="value amount">{t.amount}</span>
            </div>

            <div className="row">
               <span className="label">STATUS</span>
              <span className={`status ${t.status}`}>
                {t.status}
              </span>
             
            </div>
           

            <button className="trade-btn" onClick={showNotification}>
              Trade Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
