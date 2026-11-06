export declare const CustomerModel: {
    getAllCustomers(): Promise<any[]>;
    getCustomerById(id: number): Promise<any>;
    insertCustomer(name: string, email: string, phone?: string): Promise<any>;
    updateCustomer(id: number, name?: string, email?: string, phone?: string): Promise<any>;
};
//# sourceMappingURL=customer.model.d.ts.map