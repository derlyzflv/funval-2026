/*
import type { Response, Request, NextFunction } from "express";
import { ZodObject, z } from "zod";
import { createProductSchema } from "../schemas/productSchema.js";
export function validateSchema(schema: ZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            // z.flattenError te da una estructura limpia { formErrors, fieldErrors }
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

export const validateProduct = validateSchema(createProductSchema);
*/
import { validateSchema } from "./validateSchema.js";
import { createProductSchema, updateProductSchema } from "../schemas/productSchema.js";
export const validateCreateProduct = validateSchema(createProductSchema);
export const validateUpdateProduct = validateSchema(updateProductSchema);
//# sourceMappingURL=validate-product.js.map