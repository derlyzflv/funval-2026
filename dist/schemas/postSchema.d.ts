import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    cost: z.ZodOptional<z.ZodNumber>;
    stock: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    cost: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    stock: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
//# sourceMappingURL=postSchema.d.ts.map