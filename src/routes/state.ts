import express from 'express';
import {
    getStatesByCountryCodeController
} from '../controllers';

const stateRoutes = express.Router();

stateRoutes.get('/:countryCode', getStatesByCountryCodeController);

export default stateRoutes;
