import express from 'express';
import {
  getCitiesByCountryController,
  getCitiesByPostalCodeController,
  getCitiesByNameController,
} from '../controllers';

const cityRoutes = express.Router();

/**
 * @swagger
 * /api/city/country/{countryCode}:
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
cityRoutes.get('/country/:countryCode', getCitiesByCountryController);

/**
 * @swagger
 * /api/city/postal-code/{postalCode}:
 *   get:
 *     summary: Get cities by postal code
 *     description: Retrieve cities by postal code.
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: postalCode
 *         description: Postal code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with cities.
 *       400:
 *         description: Invalid postal code.
 *       404:
 *         description: Postal code not found.
 *       500:
 *         description: Internal server error.
 */
cityRoutes.get('/postal-code/:postalCode', getCitiesByPostalCodeController);

/**
 * @swagger
 * /api/city/name/{name}:
 *   get:
 *     summary: Get cities
 *     description: Retrieve a list of cities.
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: name
 *         description: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of cities.
 *       400:
 *         description: Invalid name.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
cityRoutes.get('/name/:name', getCitiesByNameController);

export default cityRoutes;
