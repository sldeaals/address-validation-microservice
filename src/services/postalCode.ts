import { getCitiesByCountry } from "./city";
import { City } from "../models";
import { cities } from '../data';

export function getSectorsByPostalCode(postalCode: string): City[] | [] {
  return cities.filter(city => city?.postalCode === postalCode);
}

export function postalCodeExistsForCity(countryCode: string, cityName: string, postalCode: string): boolean {
  const cities = getCitiesByCountry(countryCode);
  return cities.some(city => city.name === cityName && city.postalCode === postalCode);
}
