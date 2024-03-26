import express from 'express';
import { validateAddress } from './country';

const router = express.Router();

router.use('/address', validateAddress);

export default router;
