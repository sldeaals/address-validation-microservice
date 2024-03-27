import express from 'express';
import {
  processTextFileController,
} from '../controllers';

const customRoutes = express.Router();

customRoutes.post('/process-text-file', processTextFileController);

export default customRoutes;
