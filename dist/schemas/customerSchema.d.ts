import { z } from "zod";
export declare const createCustomerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateCustomerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
//# sourceMappingURL=customerSchema.d.ts.map