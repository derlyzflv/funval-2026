import { type Request, type Response } from "express";
import { CustomerModel } from "../models/customer.model.js";

export const getCustomers = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Customers']
        #swagger.summary = 'Listar todos los clientes'
        #swagger.description = 'Obtiene la lista completa de clientes registrados.'
        #swagger.responses[200] = {
            description: 'Lista de clientes',
            schema: [{
                id: 1,
                name: "Ana Torres",
                email: "ana@gmail.com",
                phone: "984233845"
            }]
        }
        #swagger.responses[500] = {
            description: 'Error al obtener los clientes'
        }
    */
    try {
        const customers = await CustomerModel.getAllCustomers();
        res.json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
};

export const getCustomer = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Customers']
        #swagger.summary = 'Obtener cliente por ID'
        #swagger.description = 'Busca y retorna un cliente según su ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID numérico del cliente',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Cliente encontrado',
            schema: {
                id: 1,
                name: "Ana Torres",
                email: "ana@gmail.com",
                phone: "984233845"
            }
        }
        #swagger.responses[404] = {
            description: 'Cliente no encontrado'
        }
        #swagger.responses[500] = {
            description: 'Error al obtener el cliente'
        }
    */
    try {
        const id = Number(req.params.id);
        const customer = await CustomerModel.getCustomerById(id);

        if (!customer) {
            res.status(404).json({ error: "Cliente no encontrado" });
            return;
        }

        res.json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el cliente" });
    }
};

export const createCustomer = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Customers']
        #swagger.summary = 'Crear un nuevo cliente'
        #swagger.description = 'Registra un nuevo cliente en la base de datos.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos del cliente a crear',
            required: true,
            schema: {
                name: "Roberto Sánchez",
                email: "roberto@gmail.com",
                phone: "998877665"
            }
        }
        #swagger.responses[201] = {
            description: 'Cliente creado correctamente',
            schema: {
                id: 9,
                name: "Roberto Sánchez",
                email: "roberto@gmail.com",
                phone: "998877665"
            }
        }
        #swagger.responses[400] = {
            description: 'Error de validación en los datos enviados'
        }
        #swagger.responses[409] = {
            description: 'El email ya está registrado'
        }
        #swagger.responses[500] = {
            description: 'Error al crear el cliente'
        }
    */
    try {
        const { name, email, phone } = req.body;
        const newCustomer = await CustomerModel.insertCustomer(
            name,
            email,
            phone
        );

        res.status(201).json(newCustomer);
    } catch (error: any) {
        console.error(error);
        if (error?.code === "23505") {
            res.status(409).json({ error: "El email ya está registrado" });
            return;
        }
        res.status(500).json({ error: "Error al crear el cliente" });
    }
};

export const updateCustomer = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Customers']
        #swagger.summary = 'Actualizar un cliente'
        #swagger.description = 'Actualiza los datos de un cliente existente según su ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID numérico del cliente',
            required: true,
            type: 'integer',
            minimum: 1,
            example: 1
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos actualizados del cliente',
            required: true,
            schema: {
                name: "Ana Torres",
                email: "ana@gmail.com",
                phone: "984233845"
            }
        }
        #swagger.responses[200] = {
            description: 'Cliente actualizado correctamente',
            schema: {
                id: 1,
                name: "Ana Torres",
                email: "ana@gmail.com",
                phone: "984233845"
            }
        }
        #swagger.responses[400] = {
            description: 'Error de validación en los datos enviados'
        }
        #swagger.responses[404] = {
            description: 'Cliente no encontrado'
        }
        #swagger.responses[409] = {
            description: 'El email ya está registrado por otro cliente'
        }
        #swagger.responses[500] = {
            description: 'Error al actualizar el cliente'
        }
    */
    try {
        const id = Number(req.params.id);
        const { name, email, phone } = req.body;
        const updated = await CustomerModel.updateCustomer(
            id,
            name,
            email,
            phone
        );

        if (!updated) {
            res.status(404).json({ error: "Cliente no encontrado" });
            return;
        }

        res.json(updated);
    } catch (error: any) {
        console.error(error);
        if (error?.code === "23505") {
            res.status(409).json({ error: "El email ya está registrado por otro cliente" });
            return;
        }
        res.status(500).json({ error: "Error al actualizar el cliente" });
    }
};

