function sumOfFirstNNumbers(n, sum = 0) {
  if (n == 0) {
    return sum;
  }
  console.log(sum, n);
  
  return sumOfFirstNNumbers(n - 1, sum + n);
}

console.log(sumOfFirstNNumbers(3));