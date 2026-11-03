import { query } from "../config/db.js";

// Modelo para la tabla de "products"
export const ProductModel = {
    async getAllProducts() {
        const { rows } = await query("SELECT * FROM products ORDER BY id ASC");
        return rows;
    },
    async getProductById(id: number) {
        const { rows } = await query("SELECT * FROM products WHERE id=$1", [id]);
        return rows[0] || null;
    },
    async insertProduct(name: string, description: string, price: number, stock: number) {
        const text =
            "INSERT INTO products(name, description, price, stock) VALUES($1, $2, $3,$4) RETURNING *";
        const { rows } = await query(text, [name, description, price, stock]);
        return rows[0];
    },
    async updateProduct(
        id: number,
        name: string,
        description: string,
        price: number,
        stock: number
    ) {
        const text =
            "UPDATE products SET name=$1, description=$2, price=$3, stock=$4 WHERE id=$5 RETURNING *";
        const { rows } = await query(text, [name, description, price, stock, id]);
        return rows[0] || null;
    },
};
