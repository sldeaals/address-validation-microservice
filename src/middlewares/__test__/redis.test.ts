import { closeRedisClient, getRedisClient } from '../redis';

jest.mock('../redis', () => ({
  ...jest.requireActual('../redis'),
  getRedisClient: jest.fn(),
}));

describe('Redis Middleware', () => {
  afterAll(async () => {
    await closeRedisClient();
  });

  describe('closeRedisClient', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should do nothing if redisClient is null', () => {
      (getRedisClient as jest.Mock).mockReturnValue(null);

      closeRedisClient();

      expect(getRedisClient()).toBeNull();
    });
  });
});
