import express from 'express';
import { getCountryByCodeController, fetchCountriesByNameController } from '../controllers';
import { checkCache } from '../middlewares';

const countryRoutes = express.Router();

/**
 * @swagger
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
countryRoutes.get('/:countryCode', checkCache, getCountryByCodeController);

/**
 * @swagger
 * /api/country/name/{countryCode}:
 *   get:
 *     summary: Get country by name
 *     description: Retrieve country information by name.
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: name
 *         description: country name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with country(ies) information.
 *       404:
 *         description: Contries not found.
 *       500:
 *         description: Internal server error.
 */
countryRoutes.get('/name/:name', checkCache, fetchCountriesByNameController);

export default countryRoutes;