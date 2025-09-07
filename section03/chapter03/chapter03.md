## 프로젝트(Project)

-   프로젝트 : 특정 목적을 갖는 프로그램의 단위

## 패키지

-   Node.js에서 사용하는 프로그램의 단위

## 패키지 생성 방법

-   npm init

## Node.js로 실행

-   node 파일명
-   node index.js
-   node src/index.js

## Package Scripts

-   패키지 안에 계속해서 코드를 작성하다 보면 새로운 파일도 계속 만들어지고, 새로운 폴더도 계속 생성됨.
-   그렇게 되면 계속해서 Node로 실행하고자 하는 파일의 경로가 계속 복잡해질 수가 있음.
-   이럴 때 사용하는 게 Package Scripts(패키지 스크립트)
-   package.json 파일의 scripts라는 항목 안에 존재
-   일종의 매크로 역할
-   npm run 스크립트명
-   npm run start
