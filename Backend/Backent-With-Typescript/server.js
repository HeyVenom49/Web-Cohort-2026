import express from "express";

const app = express();

app.use(express.json()); // ye middleware hai

app.get("/menu", (req, res) => {
  res.json({
    items: ["thali", "biryani", "palak paneer", "shahi paneer"],
  });
});

app.post("/order", (req, res) => {
  res.status(200).json({
    status: "Recieved Ordr",
    order: req.body,
  });
});
