import fetch from 'node-fetch';

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
  } catch (error) {
    console.error('Error validating country:', error);
    throw new Error('Failed to validate country');
  }
}
