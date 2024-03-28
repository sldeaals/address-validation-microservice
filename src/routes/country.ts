import express from 'express';
import { getCountryByCodeController } from '../controllers';

const countryRoutes = express.Router();

countryRoutes.get('/:countryCode', getCountryByCodeController);

export default countryRoutes;