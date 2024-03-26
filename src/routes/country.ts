import express from 'express';
import { validateAddressController } from '../controllers';

const addressRoutes = express.Router();

export const validateAddress = addressRoutes.post('/', validateAddressController);
