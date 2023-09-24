// export function sumAllNumbersInARange(arr: number[]) {
//   let min: number = 0;
//   let max: number = 0;

//   if (arr[0] > arr[1]) {
//     min = arr[1];
//     max = arr[0];
//   } else {
//     min = arr[0];
//     max = arr[1];
//   }

//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }

// export function sumAllNumbersInARange(arr: number[]) {
//   const min: number = arr[0] > arr[1] ? arr[1] : arr[0];
//   const max: number = arr[0] < arr[1] ? arr[1] : arr[0];

//   //   if (arr[0] > arr[1]) {
//   //     min = arr[1];
//   //     max = arr[0];
//   //   } else {
//   //     min = arr[0];
//   //     max = arr[1];
//   //   }

//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }

export function sumAllNumbersInARange(arr: number[]) {
  //   const min: number = arr[0] > arr[1] ? arr[1] : arr[0];
  //   const max: number = arr[0] < arr[1] ? arr[1] : arr[0];

  //   if (arr[0] > arr[1]) {
  //     min = arr[1];
  //     max = arr[0];
  //   } else {
  //     min = arr[0];
  //     max = arr[1];
  //   }

  let sum = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}
