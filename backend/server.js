require("dotenv").config();

const express = require("express");
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();
const DbConnect = require("./database");
const PORT = process.env.PORT || 5500;
DbConnect();

app.use(cookieParser());
const corsOption = {
  credentials: true,
  origin: "http://localhost:5173",
};
app.use(cors(corsOption));
app.use("/storage", express.static(path.join(__dirname, "storage")));
app.use(express.json({ limit: "8mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
