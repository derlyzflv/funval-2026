import type { Response, Request, NextFunction } from "express";
import { ZodObject } from "zod";
export declare function validateCustomerSchema(schema: ZodObject): (req: Request, res: Response, next: NextFunction) => void;
export declare const validateCustomer: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate-customer.d.ts.map