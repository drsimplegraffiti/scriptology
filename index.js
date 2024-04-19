const express = require("express");
const userRouter = require("./routes/user.routes");
const app = express();

const port = process.env.PORT || 8989;

app.get("/", async (_, res) => {
  res.send("home page");
});

app.use("/api", userRouter);

app.listen(port, () => {
  console.log("server 🚀 running on port" + port);
});
