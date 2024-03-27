import fs from 'fs';
import path from 'path';
import { handleError } from '../utils';
import { cities } from '../data';
import { City } from '../models';

export async function getCitiesByCountryFromFile(countryCode: string): Promise<City[] | undefined> {
  try {
    const citiesJsonPath = path.join(__dirname, '../data/cities.json');
    const citiesJsonData = fs.readFileSync(citiesJsonPath, 'utf-8');
    const cities: City[] = JSON.parse(citiesJsonData);
    const filteredCities = cities.filter(city => city.countryCode === countryCode);

    return filteredCities;
  } catch (error: unknown) {
    handleError(error, 'Error fetching cities');
  }
}

export function getCitiesByCountry(countryCode: string): City[] | [] {
  return cities.filter(city => city.countryCode === countryCode);
}

export function cityExistsForCountry(countryCode: string, cityName: string): boolean {
  const cities = getCitiesByCountry(countryCode);
  return cities.some(city => city.name === cityName);
}
