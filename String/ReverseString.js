function ReverseString(str) {
  let last = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    console.log(i, last, str[i], str[last]);
    let temp = str[i];
    str[i] = str[last];
    str[last] = temp;
    last--;
    console.log(str);
  }
  console.log(str);
}

ReverseString("Hello");
