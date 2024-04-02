import { districts } from '../data';
import { District } from '../models';

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
