const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
