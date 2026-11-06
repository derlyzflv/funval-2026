import { query } from "../config/db.js";

// Modelo para la tabla de "customers"
export const CustomerModel = {
    async getAllCustomers() {
        const { rows } = await query("SELECT * FROM customers ORDER BY id ASC");
        return rows;
    },
    async getCustomerById(id: number) {
        const { rows } = await query("SELECT * FROM customers WHERE id=$1", [id]);
        return rows[0] || null;
    },
    async insertCustomer(
        name: string,
        email: string,
        phone?: string
    ) {
        const text =
            "INSERT INTO customers(name, email, phone) VALUES($1, $2, $3) RETURNING *";
        const { rows } = await query(text, [
            name,
            email,
            phone ?? null,
        ]);
        return rows[0];
    },
    async updateCustomer(
        id: number,
        name?: string,
        email?: string,
        phone?: string
    ) {
        const text = `UPDATE customers
            SET
                name=COALESCE($1, name),
                email=COALESCE($2, email),
                phone=COALESCE($3, phone)
            WHERE id=$4
            RETURNING *`;
        const { rows } = await query(text, [
            name || null,
            email || null,
            phone || null,
            id,
        ]);
        return rows[0] || null;
    },
};

