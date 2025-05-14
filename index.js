const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

let storedLeads = [];

// POST: Import leads
app.post("/api/leads/import", (req, res) => {
  const incoming = req.body;

  console.log("📦 Incoming data:", incoming);

  if (!Array.isArray(incoming)) {
    console.log("❌ Invalid payload: expected an array of leads");
    return res.status(400).json({ error: "Expected an array of leads" });
  }

  if (incoming.length && typeof incoming[0] !== "object") {
    console.log("❌ First item is not a lead object:", incoming[0]);
    return res.status(400).json({ error: "Invalid lead format" });
  }

  storedLeads = incoming;
  console.log(`✅ Stored ${storedLeads.length} leads`);
  res.status(200).json({ success: true });
});

// GET: Return leads
app.get("/api/leads/import", (req, res) => {
  res.status(200).json(storedLeads);
});

// Basic check route
app.get("/", (req, res) => {
  res.send("Freedom Backend is alive!");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on port ${PORT}`);
});
