const express = require("express");
const promMid = require("express-prometheus-middleware");
const cors = require("cors");
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const initRouter = require("./routes/init-routes");

const corsOptions = {
  origin: [process.env.FRONTEND_URL, process.env.BACKEND_URL],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Handle Header Authorization
app.use(function (req: any, res: any, next: any) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No credentials sent!" });
  } else if (req.headers.authorization !== "mysecrettoken") {
    return res.status(403).json({ error: "Invalid credentials!" });
  }
  next();
});

// Handle Metrics middleware
app.use(
  promMid({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  })
);

// Handle routes
app.use(initRouter);

app.listen(PORT, (error: Error) => {
  if (!error) console.log("Server is running... " + PORT);
  else console.log("Error occurred, server can't start", error);
});

export default app;
