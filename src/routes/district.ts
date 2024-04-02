import express from 'express';
import {
  getDistrictsByCountryController,
  getDistrictsByPostalCodeController,
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
districtRoutes.get('/:countryCode', getDistrictsByCountryController);

/**
 * @swagger
 * tags:
 *   - name: Postal Code
 *     description: Operations related to postal codes
 * /api/postal-code/{postalCode}:
 *   get:
 *     summary: Get districts by postal code
 *     description: Retrieve districts by postal code.
 *     tags: [Postal Code]
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
districtRoutes.get('/:postalCode', getDistrictsByPostalCodeController);

export default districtRoutes;
