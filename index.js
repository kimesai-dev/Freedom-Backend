const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

let storedLeads = [];

app.post("/api/leads/import", (req, res) => {
  const incoming = req.body;

  if (!Array.isArray(incoming)) {
    console.log("❌ Invalid payload format:", incoming);
    return res.status(400).json({ error: "Expected an array of leads" });
  }

  storedLeads = incoming;
  console.log(`✅ Stored ${storedLeads.length} leads`);
  res.status(200).json({ success: true });
});

app.get("/api/leads/import", (req, res) => {
  res.status(200).json(storedLeads);
});

app.get("/", (req, res) => {
  res.send("Freedom Backend is alive!");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on port ${PORT}`);
});
