import type { Response, Request, NextFunction } from "express";
import { ZodObject } from "zod";
export declare function validateSchema(schema: ZodObject): (req: Request, res: Response, next: NextFunction) => void;
export declare const validateProduct: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate-product.d.ts.map