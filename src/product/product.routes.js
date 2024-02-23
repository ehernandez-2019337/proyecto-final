import express from "express";

import {test, save, get, search, update, inventario, deleteProduct} from './product.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate-jwt.js';


const api = express.Router();

api.get('/test',test)
api.post('/save', save)
api.get('/get',get)
api.post('/search',search)
api.put('/update/:id',[validateJwt],[ isAdmin],update)
api.put('/inventario/:id', inventario)
api.delete('/delete/:id',deleteProduct)

export default api