import { type Request, type Response } from "express";
import { type GetProductQueryInput } from "../schemas/productSchema.js";
export declare const getMenu: (req: Request<{}, {}, {}, GetProductQueryInput>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProduct: (req: Request, res: Response) => Promise<void>;
export declare const createProduct: (req: Request, res: Response) => Promise<void>;
export declare const updateProduct: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=product.controller.d.ts.map