import {
  getStatesByCountryCode,
  stateExistsForCountry,
  getStatesByName,
} from '../state';
import { State } from '../../models';
import { states } from '../../mocks';
import { closeRedisClient } from '../../middlewares';

afterAll(() => {
  closeRedisClient();
});

describe('getStatesByCountryCode service function', () => {
  it('should return an array of states for the provided country code', () => {
    const countryCode = 'DO';
    const expectedStates: State[] = states.filter(
      (state) => state.countryCode === countryCode
    );
    const result = getStatesByCountryCode(countryCode);
    expect(result).toEqual(expectedStates);
  });

  it('should return an empty array if no states are found for the provided country code', () => {
    const nonExistingCountryCode = 'XYZ';
    const result = getStatesByCountryCode(nonExistingCountryCode);
    expect(result).toEqual([]);
  });
});

describe('stateExistsForCountry service function', () => {
  it('should return true if the state exists for the provided country code and state name', () => {
    const countryCode = 'DO';
    const stateName = 'Distrito Nacional';
    const result = stateExistsForCountry(countryCode, stateName);
    expect(result).toBe(true);
  });

  it('should return false if the state does not exist for the provided country code and state name', () => {
    const countryCode = 'DO';
    const stateName = 'Nonexistent State';
    const result = stateExistsForCountry(countryCode, stateName);
    expect(result).toBe(false);
  });
});

describe('getStatesByName service function', () => {
  it('should return an array of states with matching names', () => {
    const name = 'Distrito Nacional';
    const result = getStatesByName(name);
    expect(result).toEqual([
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
    ]);
  });

  it('should return an empty array if no states match the provided name', () => {
    const name = 'Nonexistent State';
    const result = getStatesByName(name);
    expect(result).toEqual([]);
  });
});
