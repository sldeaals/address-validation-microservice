import express from 'express';
import { validateAddressController } from '../controllers';

const addressRoutes = express.Router();

addressRoutes.post('/', validateAddressController);

export default addressRoutes;
