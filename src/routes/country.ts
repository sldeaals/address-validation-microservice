import express from 'express';
import { getCountryByCodeController } from '../controllers';

const countryRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Country
 *     description: Operations related to countries
 * /api/country/{countryCode}:
 *   get:
 *     summary: Get country by country code
 *     description: Retrieve country information by country code.
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 or alpha-3 country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with country information.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
countryRoutes.get('/:countryCode', getCountryByCodeController);

export default countryRoutes;