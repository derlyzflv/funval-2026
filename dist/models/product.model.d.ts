export declare const ProductModel: {
    getAllProducts(filters: {
        name?: string | undefined;
        maxPrice?: number | undefined;
        page: number;
        limit: number;
    }): Promise<{
        data: any[];
        pagination: {
            totalItem: number;
            itemsPerPage: number;
            currentPage: number;
            totalPages: number;
        };
    }>;
    getProductById(id: number): Promise<any>;
    insertProduct(name: string, description: string, price: number, stock?: number): Promise<any>;
    updateProduct(id: number, name?: string, description?: string, price?: number, stock?: number): Promise<any>;
};
//# sourceMappingURL=product.model.d.ts.map