function extractFirstSecondLast(array) {
    const [first, second, ...rest] = array;
    const last = rest[rest.length - 1];
    return [first, second, last];
  }
  
  const inputArray = [1,2,345,4,5,6,7,8,34,8,7];
  const result = extractFirstSecondLast(inputArray);
  console.log(result);