function removeDuplicates(array) {
    var uniqueArr = [];
  
    for (var i = 0; i < array.length; i++) {
      if (!uniqueArr.includes(array[i])) {
        uniqueArr.push(array[i]);
      }
    }
  
    return uniqueArr;
  }
  
  // Example usage
  var inputArray = ['item1', 'item2', 'item1', 'item3', 'item2','item4', 'item5', 'item5', 'item5' ];
  var uniqueArr = removeDuplicates(inputArray);
  
  console.log("Array with unique elements:", uniqueArr);