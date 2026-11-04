import { type Request, type Response } from "express";
import { ProductModel } from "../models/product.model.js";

export const getMenu = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Menu']
        #swagger.summary = 'Listar todos los productos del menú'
        #swagger.description = 'Obtiene la lista completa de productos disponibles en el menú.'
        #swagger.responses[200] = {
            description: 'Lista de productos',
            schema: [{
                id: 1,
                name: "Chaufa de Pollo",
                description: "Arroz frito al wok con trozos de pollo, huevo, cebolla china y sillao",
                price: "15.00",
                stock: 45
            }]
        }
        #swagger.responses[500] = {
            description: 'Error al obtener el menú'
        }
    */
    try {
        const products = await ProductModel.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el menú" });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Menu']
        #swagger.summary = 'Obtener producto por ID'
        #swagger.description = 'Busca y retorna un producto del menú según su ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID numérico del producto',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Producto encontrado',
            schema: {
                id: 1,
                name: "Chaufa de Pollo",
                description: "Arroz frito al wok con trozos de pollo, huevo, cebolla china y sillao",
                price: "15.00",
                stock: 45
            }
        }
        #swagger.responses[404] = {
            description: 'Producto no encontrado'
        }
        #swagger.responses[500] = {
            description: 'Error al obtener el producto'
        }
    */
    try {
        const id = Number(req.params.id);
        const product = await ProductModel.getProductById(id);

        if (!product) {
            res.status(404).json({ error: "Producto no encontrado" });
            return;
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Menu']
        #swagger.summary = 'Crear un nuevo producto'
        #swagger.description = 'Registra un nuevo producto en el menú.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos del producto a crear',
            required: true,
            schema: {
                "name": "Pollo a la Brasa",
                "description": "Medio pollo a la brasa marinado con especias peruanas, acompañado de papas fritas y ensalada",
                "price": 27.00,
                "stock": 25
            }
        }
        #swagger.responses[201] = {
            description: 'Producto creado correctamente',
            schema: {
                id: 2,
                name: "Lomo Saltado",
                description: "Trozos de lomo fino salteados al wok con cebolla, tomate, papas fritas y arroz",
                price: "25.00",
                stock: 0
            }
        }
        #swagger.responses[400] = {
            description: 'Error de validación en los datos enviados'
        }
        #swagger.responses[500] = {
            description: 'Error al crear el producto'
        }
    */
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = await ProductModel.insertProduct(
            name,
            description,
            price,
            stock
        );

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el producto" });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    /*
        #swagger.tags = ['Menu']
        #swagger.summary = 'Actualizar un producto'
        #swagger.description = 'Actualiza los datos de un producto existente según su ID.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID numérico del producto',
            required: true,
            type: 'integer',
            minimum: 1,
            example: 1
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos actualizados del producto',
            required: true,
            schema: {
                name: "Chaufa de Pollo",
                description: "Arroz frito al wok con trozos de pollo, huevo, cebolla china y sillao",
                price: 15.00,
                stock: 127
            }
        }
        #swagger.responses[200] = {
            description: 'Producto actualizado correctamente',
            schema: {
                id: 1,
                name: "Chaufa de Pollo",
                description: "Arroz frito al wok con trozos de pollo, huevo, cebolla china y sillao",
                price: "15.00",
                stock: 127
            }
        }
        #swagger.responses[400] = {
            description: 'Error de validación en los datos enviados'
        }
        #swagger.responses[404] = {
            description: 'Producto no encontrado'
        }
        #swagger.responses[500] = {
            description: 'Error al actualizar el producto'
        }
    */
    try {
        const id = Number(req.params.id);
        const { name, description, price, stock } = req.body;
        const updated = await ProductModel.updateProduct(
            id,
            name,
            description,
            price,
            stock
        );

        if (!updated) {
            res.status(404).json({ error: "Producto no encontrado" });
            return;
        }

        res.json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
};
