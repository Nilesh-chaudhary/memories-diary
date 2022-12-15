import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.jfoj9pz.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true); // for future problems remove this or move below connection
mongoose
  .connect(CONNECTION_URL, {
    // useNewUrlParse: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, console.log(`server running on port : ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

// mongoose.set("useFindAndModify", false);
