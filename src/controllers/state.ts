import { Request, Response } from 'express';
import { getStatesByCountryCode, getStatesByName } from '../services';
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
      message: 'Fetched states successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to get states by country code',
    });
  }
}

export async function getStatesByNameController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name } = req.params;
    const states = getStatesByName(name);

    sendApiResponse(res, {
      data: states,
      message: 'Fetched states successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to get states',
    });
  }
}
