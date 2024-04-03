import express from 'express';
import {
  getDistrictsByCountryController,
  getDistrictsByPostalCodeController,
  getDistrictsByNameController,
} from '../controllers';

const districtRoutes = express.Router();

/**
 * @swagger
 * /api/district/{countryCode}:
 *   get:
 *     summary: Get districts by country code
 *     description: Retrieve a list of districts by country code.
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 or alpha-3 country code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of districts.
 *       400:
 *         description: Invalid country code.
 *       404:
 *         description: Country not found.
 *       500:
 *         description: Internal server error.
 */
districtRoutes.get('/country/:countryCode', getDistrictsByCountryController);

/**
 * @swagger
 * /api/district/{postalCode}:
 *   get:
 *     summary: Get districts by postal code
 *     description: Retrieve districts by postal code.
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: postalCode
 *         description: Postal code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with districts.
 *       400:
 *         description: Invalid postal code.
 *       404:
 *         description: Postal code not found.
 *       500:
 *         description: Internal server error.
 */
districtRoutes.get('/postal-code/:postalCode', getDistrictsByPostalCodeController);

/**
 * @swagger
 * /api/district/{name}:
 *   get:
 *     summary: Get districts
 *     description: Retrieve a list of districts.
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: name
 *         description: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with a list of districts.
 *       400:
 *         description: Invalid name.
 *       404:
 *         description: Districts not found.
 *       500:
 *         description: Internal server error.
 */
districtRoutes.get('/:name', getDistrictsByNameController);

export default districtRoutes;
