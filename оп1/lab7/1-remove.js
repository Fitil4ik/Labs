function removeElement(arr, item) {
const itemsToRemove = Array.isArray(item) ? item : [item];

  itemsToRemove.forEach(val => {
    const index = arr.indexOf(val)
    if (index !== -1) {
      arr.splice(index, 1);
    }
  });
  console.log(arr);
}

const array = [1, 2, 3, 4, 5];
removeElement(array, [2]);
removeElement(array, [3])