const express=require("express");
const errorhandler=require("./middlewares/errorHandler");
const inputRouter = require("./router/input_router");

const dotenv=require("dotenv").config();

const app= express();
app.use(express.json());
app.use("/symptom", inputRouter);
app.use(errorhandler);




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
