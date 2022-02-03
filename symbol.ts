// Symbol: Symbol을 함수로 사용해서 symbol type을 만들어 낼 수 있음.
// Primitive type의 값을 담아서 사용, 고유하고 수정불가능한 값으로 만들어줌
console.log(Symbol('foo') === Symbol('foo')); // -> false

const sym = Symbol()

const obj = {
  [sym]: "value",
}

obj[sym]