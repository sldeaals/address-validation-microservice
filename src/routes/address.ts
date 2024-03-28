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
 *     responses:
 *       200:
 *         description: Successful response with validated address.
 *       400:
 *         description: Invalid address.
 *       500:
 *         description: Internal server error.
 */
addressRoutes.post('/', validateAddressController);

export default addressRoutes;
