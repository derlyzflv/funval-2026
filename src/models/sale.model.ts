import { query } from "../config/db.js";

// Modelo para la tabla de "sales"
export const SaleModel = {
    async getAllSales() {
        const text = `
            SELECT s.id, s.customer_id, c.name AS customer_name, s.created_at, s.total_amount
            FROM sales s
            INNER JOIN customers c ON s.customer_id = c.id
            ORDER BY s.id ASC
        `;
        const { rows } = await query(text);
        return rows;
    },
    async getSaleById(id: number) {
        const text = `
            SELECT s.id, s.customer_id, c.name AS customer_name, s.created_at, s.total_amount
            FROM sales s
            INNER JOIN customers c ON s.customer_id = c.id
            WHERE s.id = $1
        `;
        const { rows } = await query(text, [id]);
        return rows[0] || null;
    },
    async insertSale(customer_id: number, total_amount?: number) {
        const text =
            "INSERT INTO sales(customer_id, total_amount) VALUES($1, $2) RETURNING *";
        const { rows } = await query(text, [customer_id, total_amount ?? null]);
        return rows[0];
    },
};

