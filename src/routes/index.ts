import express from 'express';

import addressRoutes from './address';
import customRoutes from './custom';
import citysRoutes from './city';
import postalCodeRoutes from './postalCode';
import stateRoutes from './state';
import countryRoutes from './country';

const routes = express.Router();

routes.use('/address', addressRoutes);
routes.use('/custom', customRoutes);
routes.use('/city', citysRoutes);
routes.use('/postal-code', postalCodeRoutes);
routes.use('/state', stateRoutes);
routes.use('/country', countryRoutes);

export default routes;
