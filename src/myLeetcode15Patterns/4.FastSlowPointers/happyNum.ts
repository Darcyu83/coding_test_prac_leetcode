function isHappy(n: number): boolean {
  let slow = n,
    fast = n;

  function getFasterN(n: number) {
    let returning = 0;

    while (n !== 0) {
      const digit = n % 10;

      returning += digit * digit;

      n = Math.floor(n / 10);
    }

    return returning;
  }

  do {
    fast = getFasterN(getFasterN(fast));
    slow = getFasterN(slow);
  } while (slow !== fast);

  return slow === 1;
}
