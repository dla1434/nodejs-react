//방법1_기본 사용법) 해당 모듈 파일에서 export로 지정된 function, class, const 이름을 지정해서 호출하기
// import { add, mul, test } from './calculator.js'
// console.log(add(10, 100))
// console.log(mul(10, 100))
// console.log(test)

//방법2_as 사용법) 
// import { add as a, mul as m, test as t } from './calculator.js'
// console.log(a(10, 100))
// console.log(m(10, 100))
// console.log(t)

//방법3) import에서 export로 지정된 모든 항목 가져오기
// import * as cal from './calculator.js'
// console.log(cal.add(10, 100))
// console.log(cal.mul(10, 100))
// console.log(cal.test)


//방법4) export default를 적용한 gobsem 호출
import gobsem from './gobsem.js'
console.log(gobsem(10,100))