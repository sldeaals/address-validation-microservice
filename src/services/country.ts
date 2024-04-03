import fetch from 'node-fetch';
import { handleError } from '../utils';

async function fetchCountryData(countryCode: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    return await response.json();
  } catch (error: unknown) {
    handleError(error, 'Failed to fetch country');
    throw error;
  }
}

export async function fetchCountriesByName(name: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return await response.json();
  } catch (error: unknown) {
    handleError(error, 'Failed to fetch country');
    throw error;
  }
}

export async function getCountryByCode(countryCode: string) {
  return await fetchCountryData(countryCode);
}

export async function validateCountry(countryCode: string): Promise<boolean> {
  try {
    const data = await fetchCountryData(countryCode);
    
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
