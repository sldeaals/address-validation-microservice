import express from 'express';
import {
  getCitiesByCountryController,
} from '../controllers';

const cityRoutes = express.Router();

cityRoutes.get('/:countryCode', getCitiesByCountryController);

export default cityRoutes;
