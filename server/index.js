import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limig: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);


//demo route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALl.E" });
});

app.listen(8000, () => console.log(`Server has started on port 8000`));
