import {
  getDistrictsByCountry,
  districtExistsForCountry,
  getDistrictsByPostalCode,
  postalCodeExistsForDistrict,
  getDistrictsByName,
} from '../district';
import { closeRedisClient } from '../../middlewares';

describe('getDistrictsByCountry service function', () => {
  afterAll(async () => {
    await closeRedisClient();
  });

  it('should return an array of districts for the provided country code', () => {
    const countryCode = 'US';
    const result = getDistrictsByCountry(countryCode);
    const expectedDistricts = [
      {
        countryCode: 'US',
        postalCode: '10001',
        name: 'New York',
        latitude: null,
        longitude: null,
        accuracy: null,
      },
    ];
    expect(result).toEqual(expectedDistricts);
  });

  it('should return an empty array if no districts are found for the provided country code', () => {
    const countryCode = 'ZZ';
    const result = getDistrictsByCountry(countryCode);
    expect(result).toEqual([]);
  });
});

describe('districtExistsForCountry service function', () => {
  it('should return true if the district exists for the provided country code and district name', () => {
    const countryCode = 'US';
    const districtName = 'New York';
    const result = districtExistsForCountry(countryCode, districtName);
    expect(result).toEqual(true);
  });

  it('should return false if the district does not exist for the provided country code and district name', () => {
    const countryCode = 'ZZ';
    const districtName = 'Unknown';
    const result = districtExistsForCountry(countryCode, districtName);
    expect(result).toEqual(false);
  });
});

describe('getDistrictsByPostalCode service function', () => {
  it('should return an array of districts with the provided postal code', () => {
    const postalCode = '10111';
    const result = getDistrictsByPostalCode(postalCode);

    expect(result.length).toBeGreaterThan(0);
    expect(
      result.every((district) => district.postalCode === postalCode)
    ).toEqual(true);
  });

  it('should return an empty array if no districts have the provided postal code', () => {
    const postalCode = '00000';
    const result = getDistrictsByPostalCode(postalCode);
    expect(result).toEqual([]);
  });
});

describe('postalCodeExistsForDistrict service function', () => {
  it('should return true if the postal code exists for the district with the provided name and country code', () => {
    const countryCode = 'DO';
    const districtName = 'Bella Vista';
    const postalCode = '10111';
    const result = postalCodeExistsForDistrict(
      countryCode,
      districtName,
      postalCode
    );

    expect(result).toEqual(true);
  });

  it('should return false if the postal code does not exist for the district with the provided name and country code', () => {
    const countryCode = 'US';
    const districtName = 'Example District';
    const postalCode = '00000';
    const result = postalCodeExistsForDistrict(
      countryCode,
      districtName,
      postalCode
    );
    expect(result).toEqual(false);
  });
});

describe('getDistrictsByName service function', () => {
  it('should return an array of districts with the provided name (case insensitive)', () => {
    const searchTerm = 'Bella Vista';
    const result = getDistrictsByName(searchTerm);

    expect(result.length).toBeGreaterThan(0);

    result.forEach((district) => {
      expect(district.name.toLowerCase()).toContain(searchTerm.toLowerCase());
    });
  });

  it('should return an empty array if no districts match the provided name', () => {
    const searchTerm = 'nonexistent district';
    const result = getDistrictsByName(searchTerm);
    expect(result).toEqual([]);
  });
});
