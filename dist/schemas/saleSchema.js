import { z } from "zod";
export const createSaleSchema = z.object({
    customer_id: z.coerce
        .number("El customer_id debe ser un número")
        .int("El customer_id debe ser un número entero")
        .positive("El customer_id debe ser mayor a cero"),
    total_amount: z.coerce
        .number("El total_amount debe ser un número")
        .positive("El total_amount debe ser mayor a cero")
        .optional(),
});
/* CREATE TABLE sales(
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(12,2),
    CONSTRAINT fk_order_customer FOREIGN KEY (customer_id)
        REFERENCES customers(id) ON DELETE RESTRICT ON UPDATE CASCADE
); */
//# sourceMappingURL=saleSchema.js.map