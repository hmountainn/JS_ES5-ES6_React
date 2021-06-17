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


//전체를 나열하는 서비스
// 1. foreach: 원래 지원되던 과거 방법
// -> for-in : 키를 뽑아주는 제어구조
lotto.forEach(function(v, k ,s){
    console.log(`k:${k}, v:${v}`);
})

for(let key in set){
    console.log(key);
}

// 2. iterator: ES6에서부터 지원하는 새로운 방법
// -> for-of : 값을 뽑아주는 제어구조
for(let v of set){
    console.log(v);
}