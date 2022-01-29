"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // -> boolean
//  let isNotOk: boolean = new Boolean(true); true값을 가진 wrapper 객체가 생성되면서 primitive type인 isNotOk에 변수에 할당 시도하지만 오류
let isOk = true;
