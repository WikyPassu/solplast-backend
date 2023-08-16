const { PORT } = require("./src/config/config");

const express = require("express");
const cors = require("cors");
const app = express();

const { logger, handlerNotFound, handlerError } = require("./src/utils/mw");
const productRouter = require("./src/routes/product.routes");

app.use(cors({
  origin: "https://solplast.vercel.app",
  methods: ["GET"],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => res.send("<h1>SOLPLAST-API</h1>"));

app.use("/api/products", productRouter);

app.use(handlerNotFound);
app.use(handlerError);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));