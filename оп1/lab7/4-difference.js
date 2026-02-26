function difference(array1, array2) {
  const result = array1.filter(item => !array2.includes(item));
    console.log(result);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4];
difference(array1, array2);
const array3 = [3, 5];
difference(array1, array3);