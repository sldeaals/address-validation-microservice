import express from 'express';
import addressRoutes from './country';
import customRoutes from './custom';
import citysRoutes from './city';

const routes = express.Router();

routes.use('/address', addressRoutes);
routes.use('/custom', customRoutes);
routes.use('/city', citysRoutes);

export default routes;
