import { handleError } from '../errorHandler';

describe('handleError function', () => {
  it('should throw an error with the provided error message', () => {
    const errorMessage = 'Test error message';
    const error = new Error('Test error');
    expect(() => {
      handleError(error, errorMessage);
    }).toThrow(`${errorMessage}: ${error.message}`);
  });

  it('should throw an error with a generic message for non-Error objects', () => {
    const errorMessage = 'Test error message';
    const error = 'Test non-Error object';
    expect(() => {
      handleError(error, errorMessage);
    }).toThrow(`Unknown error occurred: ${errorMessage}`);
  });
});
