export declare const ProductModel: {
    getAllProducts(): Promise<any[]>;
    getProductById(id: number): Promise<any>;
    insertProduct(name: string, description: string, price: number, stock?: number): Promise<any>;
    updateProduct(id: number, name?: string, description?: string, price?: number, stock?: number): Promise<any>;
};
//# sourceMappingURL=product.model.d.ts.map