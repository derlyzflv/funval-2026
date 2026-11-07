import { email, z } from "zod";
export const createCustomerSchema = z.object({
    name: z
        .string("El nombre es obligatorio")
        .trim()
        .min(1, "El nombre no puede estar vacío")
        .max(100, "El nombre no puede superar los 100 caracteres"),
    email: z
        .string("El email es obligatorio")
        .trim()
        .email("El formato del email no es válido")
        .max(100, "El email no puede superar los 100 caracteres"),
    phone: z
        .string("El teléfono debe ser un texto")
        .trim()
        .max(20, "El teléfono no puede superar los 20 caracteres")
        .optional(),
});
export const updateCustomerSchema = createCustomerSchema.partial();
/* CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20)
); */
//# sourceMappingURL=customerSchema.js.map