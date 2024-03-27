import fetch from 'node-fetch';
import { handleError } from '../utils';

export async function validateCountry(
  countryCode: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();

    if (data) {
      return true;
    } else {
      return false;
    }
  } catch (error: unknown) {
    handleError(error, 'Failed to validate country');
    return false;
  }
}
