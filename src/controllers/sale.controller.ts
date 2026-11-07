import { type Request, type Response } from "express";
import { SaleModel } from "../models/sale.model.js";

export const getSales = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Sales']
        #swagger.summary = 'Listar todas las ventas'
        #swagger.description = 'Obtiene la lista completa de ventas incluyendo el nombre del cliente.'
        #swagger.responses[200] = {
            description: 'Lista de ventas',
            schema: [{
                id: 1,
                customer_id: 1,
                customer_name: "Ana Torres",
                created_at: "2026-11-07T12:00:00.000Z",
                total_amount: "52.00"
            }]
        }
        #swagger.responses[500] = {
            description: 'Error al obtener las ventas'
        }
    */
    try {
        const sales = await SaleModel.getAllSales();
        res.json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las ventas" });
    }
};

export const getSale = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Sales']
        #swagger.summary = 'Obtener venta por ID'
        #swagger.description = 'Busca y retorna una venta según su ID incluyendo el nombre del cliente.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID numérico de la venta',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Venta encontrada',
            schema: {
                id: 1,
                customer_id: 1,
                customer_name: "Ana Torres",
                created_at: "2026-11-07T12:00:00.000Z",
                total_amount: "52.00"
            }
        }
        #swagger.responses[404] = {
            description: 'Venta no encontrada'
        }
        #swagger.responses[500] = {
            description: 'Error al obtener la venta'
        }
    */
    try {
        const id = Number(req.params.id);
        const sale = await SaleModel.getSaleById(id);

        if (!sale) {
            res.status(404).json({ error: "Venta no encontrada" });
            return;
        }

        res.json(sale);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener la venta" });
    }
};

export const createSale = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Sales']
        #swagger.summary = 'Crear una nueva venta'
        #swagger.description = 'Registra una nueva venta asociada a un cliente.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos de la venta a crear',
            required: true,
            schema: {
                customer_id: 1,
                total_amount: 52.00
            }
        }
        #swagger.responses[201] = {
            description: 'Venta creada correctamente',
            schema: {
                id: 1,
                customer_id: 1,
                created_at: "2026-11-07T12:00:00.000Z",
                total_amount: "52.00"
            }
        }
        #swagger.responses[400] = {
            description: 'Error de validación en los datos enviados'
        }
        #swagger.responses[500] = {
            description: 'Error al crear la venta'
        }
    */
    try {
        const { customer_id, total_amount } = req.body;
        const newSale = await SaleModel.insertSale(customer_id, total_amount);

        res.status(201).json(newSale);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la venta" });
    }
};

