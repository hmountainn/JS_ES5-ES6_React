// Collection
//set
let set = new Set();
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(6);

console.log(set.size)

let arr = [2,2,3,8,6,4,8,4,8,4,8,5,6,4,8,4,7];
console.log(arr.length);

let lotto = new Set(arr);
console.log(lotto.size);

if(lotto.has(8))
    console.log("8가지고 있다")