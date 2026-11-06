import { query } from "../config/db.js";
// Modelo para la tabla de "products"
export const ProductModel = {
    async getAllProducts() {
        const { rows } = await query("SELECT * FROM products ORDER BY id ASC");
        return rows;
    },
    async getProductById(id) {
        const { rows } = await query("SELECT * FROM products WHERE id=$1", [id]);
        return rows[0] || null;
    },
    async insertProduct(name, description, price, stock) {
        const text = "INSERT INTO products(name, description, price, stock) VALUES($1, $2, $3, $4) RETURNING *";
        const { rows } = await query(text, [
            name,
            description,
            price,
            stock ?? 0,
        ]);
        return rows[0];
    },
    async updateProduct(id, name, description, price, stock) {
        const text = `UPDATE products
            SET
                name=COALESCE($1, name),
                description=COALESCE($2, description),
                price=COALESCE($3, price),
                stock=COALESCE($4, stock)
            WHERE id=$5
            RETURNING *`;
        const { rows } = await query(text, [
            name || null,
            description || null,
            price || null,
            stock ?? null,
            id,
        ]);
        return rows[0] || null;
    },
};
//# sourceMappingURL=product.model.js.map