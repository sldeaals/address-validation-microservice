import { City, getCitiesByCountry } from "./city";
import { cities } from '../data';

export function getSectorsByPostalCode(postalCode: string): City[] | [] {
  return cities.filter(city => city?.postalCode === postalCode);
}

export function postalCodeExistsForCity(countryCode: string, cityName: string, postalCode: string): boolean {
  const cities = getCitiesByCountry(countryCode);
  return cities.some(city => city.placeName === cityName && city.postalCode === postalCode);
}
