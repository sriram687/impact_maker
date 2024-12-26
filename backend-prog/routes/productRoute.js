import express from 'express'
import { listProducts, singleProduct, removeProduct, addProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js'


const productRouter = express.Router();

productRouter.post('/add',upload,addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list', listProducts);

export default productRouter

