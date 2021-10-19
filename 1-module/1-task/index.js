function factorial(n) {
  let result = 1;
  if (n !== 1 && n !== 0) {
    for (let i = 1; i < n; i++) {
      result *= (i + 1);
    }
  }
  return result;
}
