import { ZodObject, z } from "zod";
import { createProductSchema } from "../schemas/productSchema.js";
export function validateSchema(schema) {
    return (req, res, next) => {
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
//# sourceMappingURL=validate-product.js.map