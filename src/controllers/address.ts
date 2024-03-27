import { Request, Response } from 'express';
import { validateCountry, cityExistsForCountry, postalCodeExistsForCity, stateExistsForCountry } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';

export async function validateAddressController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { country, city, postalCode, state } = req.body;
    const validatedAddress = await validateCountry(country);
    const isValidCity = cityExistsForCountry(country, city);
    const isValidPostalCode = postalCodeExistsForCity(country, city, postalCode);
    const isValidState = stateExistsForCountry(country, state);

    if (!isValidCity || !isValidPostalCode || !isValidState) {
      throw new Error(`Invalid city or postal code or state`);
    }

    sendApiResponse(res, {
      data: validatedAddress,
      message: 'Address validated successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to validate address',
    });
  }
}
