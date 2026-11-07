/*
import type { Response, Request, NextFunction } from "express";
import { ZodObject, z } from "zod";
import { createCustomerSchema, updateCustomerSchema } from "../schemas/customerSchema.js";

export function validateCustomerSchema(schema: ZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const flattened = z.flattenError(result.error);
            res.status(400).json({
                status: "error",
                message: "Error de validación en los datos enviados",
                errors: flattened.fieldErrors,
            });
            return;
        }

        req.body = result.data;
        next();
    };
}

export const validateCreateCustomer = validateCustomerSchema(createCustomerSchema);
export const validateUpdateCustomer = validateCustomerSchema(updateCustomerSchema);
*/
import { validateSchema } from "./validateSchema.js";
import { createCustomerSchema, updateCustomerSchema } from "../schemas/customerSchema.js";
export const validateCreateCustomer = validateSchema(createCustomerSchema);
export const validateUpdateCustomer = validateSchema(updateCustomerSchema);
//# sourceMappingURL=validate-customer.js.map