import express from 'express';
import {
    getSectorsByPostalCodeController
} from '../controllers';

const postalCodeRoutes = express.Router();

postalCodeRoutes.get('/:postalCode', getSectorsByPostalCodeController);

export default postalCodeRoutes;
