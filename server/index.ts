import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
app.use(cors());

app.listen(port, () => {
  console.log(`Backend: Running in port ${5000}`);
  console.log(`Front-end:  http://localhost:${5000}/`);
});
