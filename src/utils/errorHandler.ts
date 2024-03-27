export function handleError(error: unknown, errorMessage: string): void {
  if (error instanceof Error) {
    throw new Error(`${errorMessage}: ${error.message}`);
  } else {
    throw new Error(`Unknown error occurred: ${errorMessage}`);
  }
}
