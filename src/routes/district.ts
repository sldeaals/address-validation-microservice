import express from 'express';
import {
  getDistrictsByCountryController
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

export default districtRoutes;
