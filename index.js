const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.post("/api/leads/import", (req, res) => {
  console.log("✅ Received leads:", req.body.length);
  res.status(200).json({ success: true });
});

app.get("/", (req, res) => {
  res.send("Freedom Backend is alive");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
