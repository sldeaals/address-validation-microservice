import express from 'express';

import addressRoutes from './address';
import citysRoutes from './city';
import stateRoutes from './state';
import countryRoutes from './country';
import districtRoutes from './district';

const routes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates whether the request was successful.
 *           example: true
 *         data:
 *           type: object
 *           description: The data returned by the API (if any).
 *           nullable: true
 *         message:
 *           type: string
 *           description: A message providing additional information about the response.
 *           example: Success message
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates whether the request was successful.
 *           example: false
 *         error:
 *           type: string
 *           description: A string representation of the error.
 *           example: "Invalid request"
 *         message:
 *           type: string
 *           description: A message providing additional information about the error.
 *           example: "Invalid parameters provided"
 */
routes.use('/address', addressRoutes);
routes.use('/city', citysRoutes);
routes.use('/state', stateRoutes);
routes.use('/country', countryRoutes);
routes.use('/district', districtRoutes);

export default routes;
