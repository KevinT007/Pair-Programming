// EASY(1)
let checkEven = () => {
  let input = [1, 10, 7, 4, 9, 5];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      console.log(`${input[i]} is Even`);
    } else {
      console.log(`${input[i]} is Odd`);
    }
  }
};
checkEven();
// EASY(2)
