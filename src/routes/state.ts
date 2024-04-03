import express from 'express';
import {
    getStatesByCountryCodeController,
    getStatesByNameController,
} from '../controllers';

const stateRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: State
 *     description: Operations related to states
 * /api/state/{countryCode}:
 *   get:
 *     summary: Get states by country code
 *     description: Retrieve states by country code.
 *     tags: [State]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 or alpha-3 country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with states.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
stateRoutes.get('/country/:countryCode', getStatesByCountryCodeController);

/**
 * @swagger
 * /api/state/name/{name}:
 *   get:
 *     summary: Get states
 *     description: Retrieve a list of states.
 *     tags: [State]
 *     parameters:
 *       - in: path
 *         name: name
 *         description: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of states.
 *       400:
 *         description: Invalid name.
 *       404:
 *         description: State not found.
 *       500:
 *         description: Internal server error.
 */
stateRoutes.get('/name/:name', getStatesByNameController);

export default stateRoutes;
