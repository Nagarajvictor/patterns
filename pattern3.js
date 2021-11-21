let n = 5;
let str = "";
let i
let j
let k
for ( i = 1; i <= n; i++) {
  for ( j = 1; j <= n - i; j++) {
    str += " ";
  }
  for ( k = 0; k < 2 * i - 1; k++) {
    if(i==1 || i== n) {
      str += "*";
    }
    else {
      if(k == 0 || k == 2 * i - 2) {
        str += "*";
      }
      else {
        str += " ";
      }
    }
  }
  str += "\n";
}
console.log(str);