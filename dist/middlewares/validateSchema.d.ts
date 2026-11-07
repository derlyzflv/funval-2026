import type { Response, Request, NextFunction } from "express";
import { ZodObject } from "zod";
export declare function validateSchema(schema: ZodObject): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateSchema.d.ts.map