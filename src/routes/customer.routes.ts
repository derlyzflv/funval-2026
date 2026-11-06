import { Router } from "express";
import {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
} from "../controllers/customer.controller.js";
import { validateCustomer, validateCustomerSchema } from "../middlewares/validate-customer.js";
import { createCustomerSchema, updateCustomerSchema } from "../schemas/customerSchema.js";

const router: Router = Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", validateCustomer, createCustomer);
router.put("/customers/:id", validateCustomer, updateCustomer);

export default router;

