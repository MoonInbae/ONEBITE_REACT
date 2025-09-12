## 모듈 시스템(Module System)이란?

-   모듈시스템: 모듈을 다루는 시스템

## 모듈(Module)이란?

-   온라인 홈쇼핑

    -   회원 관리 기능
    -   장바구니 기능
    -   결제 기능

-   만약 이 복잡한 기능들을 하나의 파일에만 작성을 한다면 파일에 작성된 코드의 양이 어마어마함.
-   버그 수정 및 기능 개선 등등의 이유로 코드를 수정해야 할 때, 많은 양의 코드 중에 수정해야할 부분이 어디인지 매번 찾아야 하기 때문에 굉장히 효율이 떨어짐; 생산성이 떨어짐.
-   그래서 보통 여러개의 기능을 구현해야할 때 기능별로 파일을 나눠서 개발을 함.
-   로그인이나 회원가입을 관리하는 유저 관리 기능은 user.js에, 장바구니를 관리하는 기능은 cart.js, 결제를 관리하는 기능은 payment.js와 같이 기능별로 파일을 깔끔하게 분리하여 개발하는 것이 일반적.
-   이런 식으로 기능별로 나뉘어진 각각의 Javascript 파일들을 모듈이라는 이름으로 부름.(user.js는 user 모듈, cart.js는 cart 모듈, payment.js는 payment 모듈이라 부름)

## 모듈 시스템(Module System)이란?

-   모듈시스템: 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

## JavaScript의 모듈 시스템

-   Common JS(CJS)
-   ES Module(ESM)
-   AMD
-   UMD
-   ...

## 모듈 시스템 구분

-   package.json에서 확인가능
-   type이 없거나 commonjs로 되어 있으면 Common JS(CJS)
-   type이 module이면 ES Module(ESM)
-   타 모듈 설정이나 문법끼리는 호환이 안됨.

## 모듈 별 문법 차이

-   Common JS(CJS) - module.exports과 require 사용
-   ES Module(ESM) - export와 import 사용
    -   import 시에는 확장자까지 꼭 포함해야 함.
    -   export는 일괄적으로 해도 되고 각 함수마다 export function...같이 따로 해도 상관없음.

## ES Module(ESM)

-   import 시에는 확장자까지 꼭 포함해야 함.
-   export는 일괄적으로 해도 되고 각 함수마다 export function...같이 따로 해도 상관없음.
-   하나의 모듈을 대표하는 디폴트 값을 내보내는 방법도 있음.
    -   그게 export default function인데 이 경우에 기존의 다른 function들은 import 시 {}를 사용했던 것과 다르게 {}를 사용하지 않고 그냥 함수명으로 가져올 수 있음. 또한, 이 함수명도 마음대로 바꿔서 가져올 수 있음.
    -   Ex) multiple -> mul
-   동일한 경로에서 가져오는 함수는 import 문을 하나로 합쳐서 사용할 수 있음.
