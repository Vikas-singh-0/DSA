function recFn (n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  return recFn(n-1);
}

recFn(5);

