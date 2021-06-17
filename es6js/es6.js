//--------Function Rest/Spread/Default -------
//Rest Operator
// function print(x,y,...restvalues){};

//Spread Operator
// function pring(x,y,z){};
// let arr = [1,2,3];
// print(...arr);

//Default values
// function print(x, y=10){
//     console.log(arguments.length);
//     console.log(`x:${x}, y:${y}`);
// }

// print(10);

//arrow function
// let arr = [2,3,4,12,23,4,2,1,3,4,90];
// arr.sort(function(a,b){
//     return a - b
// });
// console.log(arr);

// arr.sort((a,b)=>a-b);
// console.log(arr);


//------------------------------------
// Collection
//set
// let set = new Set();
// set.add(5);
// set.add(5);
// set.add(5);
// set.add(5);
// set.add(6);

// console.log(set.size)

// let arr = [2,2,3,8,6,4,8,4,8,4,8,5,6,4,8,4,7];
// console.log(arr.length);

// let lotto = new Set(arr);
// console.log(lotto.size);

// if(lotto.has(8))
//     console.log("8가지고 있다")


//전체를 나열하는 서비스
// 1. foreach: 원래 지원되던 과거 방법
// -> for-in : 키를 뽑아주는 제어구조
// lotto.forEach(function(v, k ,s){
//     console.log(`k:${k}, v:${v}`);
// })

// for(let key in set){
//     console.log(key);
// }

// 2. iterator: ES6에서부터 지원하는 새로운 방법
// -> for-of : 값을 뽑아주는 제어구조
// for(let v of set){
//     console.log(v);
// }

//---------weak Set
// let ob1 = {};
// let ob2 = {};

// let s1 = "hello";
// let s2 = "hello";

// let set = new Set();
// set.add(ob1);
// set.add(ob2);

// ob1 = null;

// console.log(set.size);

//-----------map
// let exam = new Map();
// exam.set("kor",10);
// exam.set("eng",20);
// exam.set("math",40);

// //for-of이용해 key를 꺼내고 key통해서 값 꺼내기
// for(let k of exam.keys())
//     console.log(exam.get(k));

// //for-of이용해 값을 바로 꺼내기
// for(let v of exam.values())
//     console.log(v);

// //for-of이용해 key, value 모두 꺼내기
// for(let [k,v] of exam.entries())
//     console.log(`key:${k}, value:${v}`);

//------Javascript Object Oriented Programming -------
//행위 또는 처리하는 함수
function print(){
    console.log(this); // this: window객체
}

print()

//데이터 객체를 만들어서 초기화 하는 목적의 함수 : 생성자 함수
function Exam(){
    this.kor = 0;
    this.eng = 10;
    this.math = 20;

}

//프로토타입 정의
Exam.prototype.total = function(){
    return this.kor+this.eng+this.math;
}


let exam1 = new Exam();
let exam2 = new Exam();
console.log(exam1.total === exam2.total);