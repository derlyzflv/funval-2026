import { z } from "zod";
export declare const createSaleSchema: z.ZodObject<{
    customer_id: z.ZodCoercedNumber<unknown>;
    total_amount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateSaleInput = z.infer<typeof createSaleSchema>;
//# sourceMappingURL=saleSchema.d.ts.map