const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// logging
app.use(morgan("dev"));

// parsers (multipart is handled by multer in the posts router)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// DB
const client = require("./db/client");
client.connect();

// serve uploaded images statically (expects server/uploads to exist)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Router: /api
app.use("/api", require("./api"));

// basic error handler so Multer/file errors become JSON responses
app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Server error" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
