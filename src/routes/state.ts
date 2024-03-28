import express from 'express';
import {
    getStatesByCountryCodeController
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
stateRoutes.get('/:countryCode', getStatesByCountryCodeController);

export default stateRoutes;
