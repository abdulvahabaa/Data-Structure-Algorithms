let arr = [23, 24, 1, 3, 2, 9, 34, 26, 75, 22]

for (let i = 0; i <= arr.length; i++){
    for (let j = 0; j <= arr.length; j++){
        if (arr[i] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i]= temp
        }
    }
}
console.log(arr)