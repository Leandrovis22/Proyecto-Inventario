import cors from "cors";
import express from "express";
import { homeController } from "./controllers/homeController";
import { userController } from "./controllers/userController";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/home", homeController);

app.get("/user/:userId", userController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


