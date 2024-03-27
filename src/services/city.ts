import fs from 'fs';
import path from 'path';
import { handleError } from '../utils';

export interface City {
  countryCode: string;
  postalCode: string;
  placeName: string;
  adminName1: string;
  adminCode1: string;
  adminName2: string;
  adminCode2: string;
  adminName3: string;
  adminCode3: string;
  latitude: number;
  longitude: number;
  accuracy: number;
}

export async function getCitiesByCountry(countryCode: string): Promise<City[] | undefined> {
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
