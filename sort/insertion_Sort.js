insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let currentElemet = arr[i];

    let j = i - 1;
    while (j >= 0 && currentElemet < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElemet;
  }
  return arr;
};

const arr = [23, 24, 1, 3, 2, 9, 34, 26, 75, 22];
const sortedArr = insertionSort(arr.slice()); // Make a copy to keep the original array unchanged
console.log(sortedArr);
