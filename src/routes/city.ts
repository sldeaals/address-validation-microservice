import express from 'express';
import {
  getCitiesByCountryFromFileController,
  getCitiesByCountryController
} from '../controllers';

const cityRoutes = express.Router();

cityRoutes.get('/from-file/:countryCode', getCitiesByCountryFromFileController);
cityRoutes.get('/:countryCode', getCitiesByCountryController);

export default cityRoutes;
