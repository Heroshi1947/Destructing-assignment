function findMaxMin(array) {
    const max = Math.max(...array.filter(value => !isNaN(value)));
    const min = Math.min(...array.filter(value => !isNaN(value)));
    return {
      max,
      min
    };
  }
  
  const inputArray = [1, 2, 3, 46, 5, 6, 7, 8, 9, 10];
  const result = findMaxMin(inputArray);
  console.log(result);