import { z } from "zod";
export const createProductSchema = z.object({
    name: z
        .string("El nombre es obligatorio")
        .trim()
        .min(1, "El nombre no puede estar vacío")
        .max(100, "El nombre no puede superar los 100 caracteres"),
    description: z
        .string("La descripción es obligatoria")
        .trim()
        .min(1, "La descripción no puede estar vacía"),
    price: z.coerce
        .number("El precio debe ser un número")
        .positive("El precio debe ser mayor a cero"),
    stock: z.coerce
        .number("El stock debe ser un número")
        .int("El stock debe ser un número entero")
        .min(0, "El stock debe ser mayor o igual a cero")
        .optional(),
});
export const updateProductSchema = createProductSchema.partial();
/* CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0)
); */
//# sourceMappingURL=productSchema.js.map