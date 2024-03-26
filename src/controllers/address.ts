import { Request, Response } from 'express';
import { validateCountry } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';

export async function validateAddressController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { country } = req.body;
    const validatedAddress = await validateCountry(country);

    sendApiResponse(res, {
      data: validatedAddress,
      success: true,
      status: 200,
      message: 'Address validated successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
      message: 'Failed to validate address',
    });
  }
}
