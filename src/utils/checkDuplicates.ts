const checkForDuplicates = (array: any[], property: string) => {
  const uniqueValues = new Set(array.map((v) => v[property]));

  if (uniqueValues.size < array.length) {
    return true;
  }
  return false;
};

export default checkForDuplicates;
