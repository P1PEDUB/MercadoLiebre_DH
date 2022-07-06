const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "localhost";
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) =>
res.sendFile(path.resolve(__dirname, "./views/home.html"))
);

app.post("/", (req, res) =>
res.sendFile(path.resolve(__dirname, "./views/home.html"))
);

app.get("/register", (req, res) =>
res.sendFile(path.resolve(__dirname, "./views/register.html"))
);

app.get("/login", (req, res) =>
res.sendFile(path.resolve(__dirname, "./views/login.html"))
);

app.listen(PORT, () => {
    console.log(`corriendo en el servidor http://${HOST}:${PORT}/`)
    });