// 초기 배열 선언
let arr = [10, 20, 30, 40];

// 1. map & forEach 기초
arr.map(() => {
    console.log('arr map');
});

arr.forEach((v) => {
    console.log('forEach : ' + v);
});

arr.map((item) => {
    console.log('arr map : ' + item);
});

arr.map((item, index) => {
    console.log('arr map : ' + item + " index : " + index);
});

// 2. map의 반환값 확인
let result1 = arr.map(() => {
    return 99;
});
console.log(result1); // [99, 99, 99, 99]

let result2 = arr.map((item) => {
    console.log(item);
}); 
console.log(result2); // 반환값이 없으므로 [undefined, undefined, undefined, undefined]

let result3 = arr.map((item) => {
    return item + 100;
});
console.log(result3); // [110, 120, 130, 140]

let result4 = arr.map((item) => {
    return '원래 가지고 있던 값 : ' + item;
});
console.log(result4);

// 3. 문자열/HTML 태그 map 처리
let menuArr = ['라면', '우동', '김밥'];
let result5 = menuArr.map((menu) => {
    return "<p>" + menu + "</p>";
});
console.log(result5);

let result6 = menuArr.map((menu) => "<p>" + menu + "</p>");
console.log(result6);

// 4. filter 활용
let result7 = arr.filter((value) => {
    return true;
});
console.log(result7); // [10, 20, 30, 40]

let result8 = arr.filter((value) => {
    return value > 15;
});
console.log(result8); // [20, 30, 40]

let result9 = arr.filter((value) => {
    return value == 30;
});
console.log(result9); // [30]

// 5. find & findIndex (배열 재선언)
arr = [10, 20, 30, 40, 30, 30, 20, 10, 20];

let result10 = arr.find((value) => {
    return value == 20;
});
console.log(result10); // 20 (첫 번째로 만난 요소)

let result11 = arr.findIndex((value) => {
    return value == 20;
});
console.log(result11); // 1 (첫 번째로 만난 요소의 인덱스)

// 6. 구조 분해 할당 (Destructuring)
let arr2 = [10, 20, 30];
console.log(arr2);
console.log(arr2[1]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1);
console.log(n2);
console.log(n3);

let [num, setNum] = [77, 88];
console.log(num);
console.log(setNum);

// 7. 함수 구조 분해 할당
function func1() {
    console.log('func1()');
}

let [c, f] = [50, func1];
console.log(c);
f(); // func1() 실행

// 8. useState 모형 수정 (오류 수정 완료)
function useState(n) {
    let state = n;
    function setState(input) {
        state = input;
        console.log('값이 변경되었습니다:', state);
    }
    // 상태값(값 자체) 대신 값을 읽어올 수 있는 함수를 넘겨주어야 
    // 나중에 바뀐 값을 확인할 수 있습니다. (여기서는 단순 구조 구현을 위해 래핑)
    return [() => state, setState]; 
}

// 초기값 0을 넣어 함수 정의 아래에서 실행
let [getCount, setCount] = useState(0); 

console.log(getCount()); // 0
setCount(10);            // 값이 변경되었습니다: 10
console.log(getCount()); // 10

let obj = {
    num1 = 30,
    num2 = 50
    
};

console.log(obj.num1);
console.log(obj.num2 );

let obj2 = obj;

console.log(obj2.num1);
console.log(obj2.num2);