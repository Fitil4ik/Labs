function unique(array) {
  const result = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  console.log(result);
}

const array = [1, 2, 2, 3, 4, 4, 5];
unique(array);
const array2 = [5, 5, 5, 2, 3, 3];
unique(array2);