import express, {} from "express";
import swaggerRouter from "./routes/swagger.router.js";
import productosRouter from "./routes/product.routes.js";
import customersRouter from "./routes/customer.routes.js";
import salesRouter from "./routes/sale.routes.js";
import cors from "cors";
const port = process.env.PORT;
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/docs", swaggerRouter);
app.use("/api", productosRouter);
app.use("/api", customersRouter);
app.use("/api", salesRouter);
app.get("/", (req, res) => {
    /*#swagger.tags = ['Tests']*/
    res.json({
        status: "Server online",
        version: "1.0.0",
    });
});
app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map