import express from 'express';
import { validateAddressController } from '../controllers';

const addressRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Address
 *     description: Operations related to addresses
 * /api/address:
 *   post:
 *     summary: Validate address
 *     description: Validate an address.
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *             example:
 *               line1: "123 Main St"
 *               line2: "Madison Hotel"
 *               city: "New York City"
 *               state: "New York"
 *               postalCode: "10001"
 *               country: "USA"
 *     responses:
 *       200:
 *         description: Successful response with validated address.
 *       400:
 *         description: Invalid address.
 *       500:
 *         description: Internal server error.
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *         country:
 *           type: string
 *         line1:
 *           type: string
 *         line2:
 *           type: string
 *         postalCode:
 *           type: string
 *         state:
 *           type: string
 */
addressRoutes.post('/', validateAddressController);

export default addressRoutes;
