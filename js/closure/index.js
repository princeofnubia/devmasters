// arrays
// strings
// objects

// sequence and series
// T = a + (n - 1)d N (1, ~) 2+(n-1)2 2, 4, 6, 8, 10 ....
function* gen(a, d = 2, n = 1) {
  while (true) {
    yield a + d * (n - 1);
    n = n + 1;
  }
}
// 2,4,6,8,10,12,14,16
let ap = gen(2, 2);

console.log(ap.next().value);
