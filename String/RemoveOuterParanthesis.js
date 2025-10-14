Input: s = "(()())(())(()(()))";
Output: "()()()()(())";

function RemoveOuterParanthesis(str) {
  let arr = [];
  let res = "";
  let start;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      arr.push("(");
      start = i;
    }
    while (arr.length > 0) {
      console.log("--", arr);
      i = i + 1;
      if (str[i] == "(") {
        arr.push("(");
      } else {
        arr.pop();
      }
    }
    res = res.concat( str.slice(start + 1, i));
    console.log(start, i, res);
    
  }
  console.log("---", res);
}

RemoveOuterParanthesis(s);
