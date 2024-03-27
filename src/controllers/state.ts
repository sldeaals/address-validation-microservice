import { Request, Response } from 'express';
import { getStatesByCountryCode } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';

export async function getStatesByCountryCodeController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { countryCode } = req.params;
    const cities = getStatesByCountryCode(countryCode);

    sendApiResponse(res, {
      data: cities,
      success: true,
      status: 200,
      message: 'Fetched states successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
      message: 'Failed to get states by country code',
    });
  }
}
