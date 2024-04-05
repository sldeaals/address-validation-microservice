import { Country } from '../../models';
import { countries } from '../../mocks';
import { closeRedisClient } from '../../middlewares';

describe('getCountryByCode function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(async () => {
    await closeRedisClient();
  });

  it('should return country data when fetched successfully', async () => {
    const mockCountryCode = 'US';
    const mockCountryData = countries[0];
    const getCountryByCode = jest
      .fn()
      .mockResolvedValue(countries[0] as Country);
    const countryData = await getCountryByCode(mockCountryCode);

    expect(countryData).toEqual(mockCountryData);
  });

  it('should throw an error when fetching country data fails', async () => {
    const mockCountryCode = 'DE';
    const getCountryByCode = jest
      .fn()
      .mockRejectedValue(new Error('Failed to fetch country'));

    await expect(getCountryByCode(mockCountryCode)).rejects.toThrow(
      'Failed to fetch country'
    );
  });
});
