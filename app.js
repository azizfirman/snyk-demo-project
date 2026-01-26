const express = require("express");
const app = express();

const SECRET_KEY = "my-super-secret-key"; // hardcoded secret

app.get("/user", (req, res) => {
  const user = req.query.user;
  res.send("Hello " + user); // XSS / insecure input
});

app.get("/admin", (req, res) => {
  res.json({ status: "admin access granted" }); // unsecured API endpoint
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
