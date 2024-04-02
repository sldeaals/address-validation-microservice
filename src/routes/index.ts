import express from 'express';

import addressRoutes from './address';
import citysRoutes from './city';
import postalCodeRoutes from './postalCode';
import stateRoutes from './state';
import countryRoutes from './country';
import districtRoutes from './district';

const routes = express.Router();

routes.use('/address', addressRoutes);
routes.use('/city', citysRoutes);
routes.use('/postal-code', postalCodeRoutes);
routes.use('/state', stateRoutes);
routes.use('/country', countryRoutes);
routes.use('/district', districtRoutes);

export default routes;
