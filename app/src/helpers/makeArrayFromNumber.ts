const makeArrayFromNumber = (a: number): number[] => {
  const array: number[] = [];
  for (let i = 0; i < a; i++) {
    array.push(i + 1);
  }
  return array;
};

export default makeArrayFromNumber;
