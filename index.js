const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/leads/import', (req, res) => {
  console.log('✅ Leads received:', req.body);
  res.status(200).json({ success: true });
});

app.get('/', (req, res) => {
  res.send('Backend is live!');
});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on port ${PORT}`);
});
