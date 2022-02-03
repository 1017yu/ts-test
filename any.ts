function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

let losselyTyped: any = {};

const d = losselyTyped.a.b.c.d // any는 개체를 통해 전파됨 

function leakingAny(obj: any) {
  const a: number = obj.num; // const a: number
  const b = a + 1 // const b: number
  return b;
}

const c = leakingAny({ 
  num: 0 // const c: number
});