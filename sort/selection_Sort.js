selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let midIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[midIndex]) {
        midIndex = j;
      }
    }
    if (midIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[midIndex];
      arr[midIndex] = temp;
    }
  }
  return arr;
};

const arr = [23, 24, 1, 3, 2, 9, 34, 26, 75, 22];
console.log(selectionSort(arr));

// const sortedArr = selectionSort(arr.slice()); // Make a copy to keep the original array unchanged
// console.log(sortedArr)
