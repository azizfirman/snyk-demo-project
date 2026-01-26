const express = require("express");
const app = express();

const JWT_SECRET = "jwt_secret_key_1234567890"; // hardcoded secret

app.get("/user", (req, res) => {
  const user = req.query.user;
  res.send("Hello " + user); // XSS / insecure input
});

app.get("/admin", (req, res) => {
  res.json({ status: "admin access granted" });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});