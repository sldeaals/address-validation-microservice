import express from 'express';
import {
  getCitiesByCountryFromFileController,
  getCitiesByCountryController
} from '../controllers';

const cityRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: City
 *     description: Operations related to cities
 * /api/city/from-file/{countryCode}:
 *   get:
 *     summary: Get cities by country code from file
 *     description: Retrieve a list of cities by country code from a file.
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 or alpha-3 country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of cities.
 *       400:
 *         description: Invalid country code.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
cityRoutes.get('/from-file/:countryCode', getCitiesByCountryFromFileController);

/**
 * @swagger
 * /api/city/{countryCode}:
 *   get:
 *     summary: Get cities by country code
 *     description: Retrieve a list of cities by country code.
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 or alpha-3 country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of cities.
 *       400:
 *         description: Invalid country code.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
cityRoutes.get('/:countryCode', getCitiesByCountryController);

export default cityRoutes;
