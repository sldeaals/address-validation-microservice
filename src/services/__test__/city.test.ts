import {
  getCitiesByName,
  getCitiesByCountry,
  cityExistsForCountry,
  postalCodeExistsForCity,
  getCitiesByPostalCode,
} from '../city';
import { closeRedisClient } from '../../middlewares';

afterAll(() => {
  closeRedisClient();
});

describe('getCitiesByName service function', () => {
  it('should return an array of cities with matching names', () => {
    const name = 'Santo Domingo de Guzmán';
    const result = getCitiesByName(name);
    expect(result).toEqual([
      {
        stateCode: 1,
        countryCode: 'DO',
        postalCodes: ['10101', '10102', '10103', '10110', '10111', '10112'],
        cityId: 1,
        name: 'Santo Domingo de Guzmán',
      },
    ]);
  });

  it('should return an empty array if no cities match the provided name', () => {
    const name = 'Nonexistent City';
    const result = getCitiesByName(name);
    expect(result).toEqual([]);
  });
});

describe('getCitiesByCountry service function', () => {
  it('should return an array of cities with matching country codes', () => {
    const countryCode = 'US';
    const result = getCitiesByCountry(countryCode);
    expect(result).toEqual([
      {
        stateCode: 'NY',
        countryCode: 'US',
        postalCodes: ['10001', '10002', '10003'],
        cityId: 1,
        name: 'New York',
      },
      {
        stateCode: 'CA',
        countryCode: 'US',
        postalCodes: ['90001', '90002', '90003'],
        cityId: 2,
        name: 'Los Angeles',
      },
    ]);
  });

  it('should return an empty array if no cities match the provided country code', () => {
    const countryCode = 'DE';
    const result = getCitiesByCountry(countryCode);
    expect(result).toEqual([]);
  });
});

describe('cityExistsForCountry service function', () => {
  it('should return true if city exists for the provided country code and city name', () => {
    const countryCode = 'US';
    const cityName = 'New York';
    const result = cityExistsForCountry(countryCode, cityName);
    expect(result).toBe(true);
  });

  it('should return false if city does not exist for the provided country code and city name', () => {
    const countryCode = 'US';
    const cityName = 'Berlin';
    const result = cityExistsForCountry(countryCode, cityName);
    expect(result).toBe(false);
  });
});

describe('postalCodeExistsForCity service function', () => {
  it('should return true if postal code exists for the provided country code, city name, and postal code', () => {
    const countryCode = 'US';
    const cityName = 'New York';
    const postalCode = '10001';
    const result = postalCodeExistsForCity(countryCode, cityName, postalCode);
    expect(result).toBe(true);
  });

  it('should return false if postal code does not exist for the provided country code, city name, and postal code', () => {
    const countryCode = 'US';
    const cityName = 'New York';
    const postalCode = '99999';
    const result = postalCodeExistsForCity(countryCode, cityName, postalCode);
    expect(result).toBe(false);
  });
});

describe('getCitiesByPostalCode service function', () => {
  it('should return an array of cities for the provided postal code', () => {
    const postalCode = '10001';
    const result = getCitiesByPostalCode(postalCode);
    const expectedCities = [
      {
        stateCode: 'NY',
        countryCode: 'US',
        postalCodes: ['10001', '10002', '10003'],
        cityId: 1,
        name: 'New York',
      },
    ];
    expect(result).toEqual(expectedCities);
  });

  it('should return an empty array if no cities are found for the provided postal code', () => {
    const postalCode = '99999';
    const result = getCitiesByPostalCode(postalCode);
    expect(result).toEqual([]);
  });
});
