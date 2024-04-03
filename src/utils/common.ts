export function generateRandomString (length: number): string {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

export function searchByField<T>(array: T[], fieldName: keyof T, searchTerm: string): T[] {
  return array.filter(item => {
      const fieldValue = item[fieldName];

      if (typeof fieldValue === 'string') {
          return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
      }

      if (typeof fieldValue === 'number') {
          return fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }

      return false;
  });
}
