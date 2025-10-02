function printNameNTime(n, name) {
  if(n == 0) {
    return;
  }
  console.log(name);
  printNameNTime(n-1, name);
}

printNameNTime(12, "VIkas");

function print1ToN(n, count = 0) {
  if(count == n) {
    console.log(count);
    return;
  }
  console.log(count);
  print1ToN(n, count + 1);  
}

print1ToN(10);

function printNTo1(n) {
  if(n == 0) {
    return;
  }
  console.log(n);
  printNTo1(n - 1);  
}

printNTo1(10);