import { logger } from '../winston';
import winston from 'winston';

describe('Winston Logger Middleware', () => {
  it('should create a logger with the specified configuration', () => {
    expect(logger).toBeInstanceOf(winston.Logger);

    expect(logger.level).toBe('info');

    expect(logger.format).toEqual(winston.format.json());

    const consoleTransport = logger.transports.find(
      (transport) => transport instanceof winston.transports.Console,
    );
    expect(consoleTransport).toBeDefined();
  });
});
