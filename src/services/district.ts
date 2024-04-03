import { districts } from '../mocks';
import { District } from '../models';
import { searchByField } from '../utils';

export function getDistrictsByCountry(countryCode: string): District[] | [] {
  return districts.filter(district => district.countryCode === countryCode);
}

export function districtExistsForCountry(countryCode: string, districtName: string): boolean {
  const districts = getDistrictsByCountry(countryCode);
  return districts.some(district => district.name === districtName);
}

export function getDistrictsByPostalCode(postalCode: string): District[] | [] {
  return districts.filter(district => district?.postalCode === postalCode);
}

export function postalCodeExistsForDistrict(countryCode: string, districtName: string, postalCode: string): boolean {
  const districts = getDistrictsByCountry(countryCode);
  return districts.some(district => district.name === districtName && district.postalCode === postalCode);
}

export function getDistrictsByName(name: string): District[] | [] {
  return searchByField(districts, 'name', name);
}
