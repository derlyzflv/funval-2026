import { query } from "../config/db.js";

// Modelo para la tabla de "products"
export const ProductModel = {
    async getAllProducts(filters: {
        name?: string | undefined;
        maxPrice?: number | undefined;
        page: number;
        limit: number;
    }) {
        const { name, maxPrice, page, limit } = filters;

        let sqlBase = "WHERE 1=1";
        const values: any[] = [];
        let paramIndex = 1;

        if (name) {
            sqlBase += ` AND name ILIKE $${paramIndex}`;
            values.push(`%${name}%`);
            paramIndex++;
        }
        if (maxPrice !== undefined) {
            sqlBase += ` AND price <= $${paramIndex}`;
            values.push(maxPrice);
            paramIndex++;
        }

        const countQuery = `SELECT COUNT(*) FROM products ${sqlBase}`;
        const countResult = await query(countQuery, values);
        const totalItem = parseInt(countResult.rows[0].count, 10);

        const offset = (page - 1) * limit;
        const dataQuery = `SELECT * FROM products ${sqlBase} ORDER BY id ASC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
        const queryValues = [...values, limit, offset];
        const { rows } = await query(dataQuery, queryValues);

        return {
            data: rows,
            pagination: {
                totalItem,
                itemsPerPage: limit,
                currentPage: page,
                totalPages: Math.ceil(totalItem / limit),
            },
        };
    },
    async getProductById(id: number) {
        const { rows } = await query("SELECT * FROM products WHERE id=$1", [id]);
        return rows[0] || null;
    },
    async insertProduct(
        name: string,
        description: string,
        price: number,
        stock?: number
    ) {
        const text =
            "INSERT INTO products(name, description, price, stock) VALUES($1, $2, $3, $4) RETURNING *";
        const { rows } = await query(text, [
            name,
            description,
            price,
            stock ?? 0,
        ]);
        return rows[0];
    },
    async updateProduct(
        id: number,
        name?: string,
        description?: string,
        price?: number,
        stock?: number
    ) {
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
