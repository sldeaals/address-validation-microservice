import { cities } from '../mocks';
import { City } from '../models';
import { searchByField } from '../utils';

export function getCitiesByName(name: string): City[] | [] {
  return searchByField(cities, 'name', name);
}

export function getCitiesByCountry(countryCode: string): City[] | [] {
  return cities.filter(city => city.countryCode === countryCode);
}

export function cityExistsForCountry(countryCode: string, cityName: string): boolean {
  const cities = getCitiesByCountry(countryCode);
  return cities.some(city => city.name === cityName);
}

export function postalCodeExistsForCity(countryCode: string, cityName: string, postalCode: string): boolean {
  const cities = getCitiesByCountry(countryCode);
  return cities.some(city => city.name === cityName && city?.postalCodes.includes(postalCode));
}

export function getCitiesByPostalCode(postalCode: string): City[] {
  return cities.filter(city => city.postalCodes.includes(postalCode));
}
