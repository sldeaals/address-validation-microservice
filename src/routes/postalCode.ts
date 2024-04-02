import express from 'express';
import {
    getDistrictsByPostalCodeController
} from '../controllers';

const postalCodeRoutes = express.Router();

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
postalCodeRoutes.get('/:postalCode', getDistrictsByPostalCodeController);

export default postalCodeRoutes;
