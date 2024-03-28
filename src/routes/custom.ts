import express from 'express';
import {
  processTextFileController,
} from '../controllers';

const customRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Custom
 *     description: Operations related to custom endpoints
 * /api/custom/process-text-file:
 *   post:
 *     summary: Process text file
 *     tags: [Custom]
 *     description: Process a custom text file.
 *     responses:
 *       200:
 *         description: Successful response.
 *       500:
 *         description: Internal server error.
 */
customRoutes.post('/process-text-file', processTextFileController);

export default customRoutes;
