import { Router } from "express";
import { getCustomers, getCustomer, createCustomer, updateCustomer, } from "../controllers/customer.controller.js";
import { validateCustomerSchema } from "../middlewares/validate-customer.js";
import { createCustomerSchema, updateCustomerSchema } from "../schemas/customerSchema.js";
const router = Router();
router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", validateCustomerSchema(createCustomerSchema), createCustomer);
router.put("/customers/:id", validateCustomerSchema(updateCustomerSchema), updateCustomer);
export default router;
//# sourceMappingURL=customer.routes.js.map