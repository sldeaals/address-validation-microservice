import { Request, Response } from 'express';
import { validateCountry } from '../services';

export async function validateAddressController(req: Request, res: Response): Promise<void> {
    try {
        const { country } = req.body;
        const isValidAddress = await validateCountry(country);

        if (isValidAddress) {
            res.json({ valid: true, message: 'Address is valid' });
        } else {
            res.json({ valid: false, message: 'Invalid address' });
        }
    } catch (error) {
        console.error('Error validating address:', error);
        res.json({ error: 'Internal server error' });
    }
}