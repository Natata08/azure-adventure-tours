const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const mockTours = [
  {
    id: 1,
    name: "Hiking in the Swiss Alps",
    description:
      "Experience breathtaking views and serene landscapes on a 3-day guided hike through the heart of the Swiss Alps.",
    price: 4500.0,
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
  },
  {
    id: 2,
    name: "Paris Culinary Journey",
    description:
      "Discover the flavors of Paris, from croissants to coq au vin. Includes cooking classes and market tours.",
    price: 3200.0,
    imageUrl:
      "https://images.unsplash.com/photo-1642486574545-509db153db60?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Costa Rica Jungle Expedition",
    description:
      "Explore lush rainforests, spot exotic wildlife, and zip-line through the canopy in this thrilling adventure.",
    price: 3800.0,
    imageUrl:
      "https://images.unsplash.com/photo-1701841591867-6741d74f27b7?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

app.get("/api/tours", (req, res) => {
  res.json(mockTours);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
