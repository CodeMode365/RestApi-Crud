import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//we are using json for data transmission
app.use(bodyParser.json());

app.use("/users", usersRoutes);

//creating routes
app.get("/", (req, res) => {
  res.send("Hello this is home");
});

//listening port
app.listen(PORT, () => {
  console.log(`Server running in localhost:${PORT}`);
});
