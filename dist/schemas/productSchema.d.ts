import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodCoercedNumber<unknown>;
    stock: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    stock: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const getProductsQuerySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    maxPrice: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
    page: z.ZodDefault<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
    limit: z.ZodDefault<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
}, z.core.$strip>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type GetProductQueryInput = z.infer<typeof getProductsQuerySchema>;
//# sourceMappingURL=productSchema.d.ts.map