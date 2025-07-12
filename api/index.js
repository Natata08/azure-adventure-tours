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
      "https://images.unsplash.com/photo-1587825159281-22631b262e56?q=80&w=2070", // Sample image from Unsplash
  },
  {
    id: 2,
    name: "Paris Culinary Journey",
    description:
      "Discover the flavors of Paris, from croissants to coq au vin. Includes cooking classes and market tours.",
    price: 3200.0,
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
  },
  {
    id: 3,
    name: "Costa Rica Jungle Expedition",
    description:
      "Explore lush rainforests, spot exotic wildlife, and zip-line through the canopy in this thrilling adventure.",
    price: 3800.0,
    imageUrl:
      "https://images.unsplash.com/photo-1533130939334-a3defa709a34?q=80&w=2070",
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
