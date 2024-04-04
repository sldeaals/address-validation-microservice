import { searchByField, generateRandomString } from '../common';
import { states } from '../../mocks';

const testData = [...states];
const searchByNameMock = [
  {
    countryCode: 'DO',
    stateCode: '1',
    name: 'Distrito Nacional',
    cities: [
      {
        stateCode: 1,
        countryCode: 'DO',
        postalCodes: ['10101', '10102', '10103', '10110', '10111', '10112'],
        cityId: 1,
        name: 'Santo Domingo de Guzmán',
      },
    ],
  },
];

describe('searchByField', () => {
  it('should return an array of objects matching the search term in the specified field (case insensitive)', () => {
    const searchResultByName = searchByField(testData, 'name', 'Distrito Nacional');
    expect(searchResultByName).toEqual(searchByNameMock);
  });

  it('should return an empty array if no match is found', () => {
    const searchResult = searchByField(testData, 'name', 'Unknown');
    expect(searchResult).toEqual([]);
  });
});

describe('generateRandomString', () => {
  it('should generate a random string of the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString).toHaveLength(length);
  });

  it('should return an empty string if length is 0', () => {
    const length = 0;
    const randomString = generateRandomString(length);
    expect(randomString).toBe('');
  });
});