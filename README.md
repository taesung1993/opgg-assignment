# OPGG ASSIGNMENT PROJECT
### 설명
- Front-end 개발자 채용 과제 Repository 입니다.

### 이용한 주요 라이브러리
- [x] React
- [x] Typescript
- [x] Eslint 
- [x] Jest, Testing library(약간의 Unit Test 사용) 
- [x] tailwindCss
- [x] react query
- [x] recoil
- [x] husky  

### 명령어
- ```npm run start``` 명령어를 이용하여 프로젝트를 실행시킬 수 있습니다.
- ```npm run test``` 명령어를 이용하여 Unit Test 결과를 확인할 수 있습니다.

### 특이사항
- 비록 개인과제였지만, 조직은 개발 팀을 구성하여 운영하기 때문에 협업의 상황을 맞추기 위해 [프로젝트](https://github.com/users/taesung1993/projects/1)로 
이슈를 생성하여 작업을 진행하였습니다.
- 로컬에서 main으로 Push를 막기 위해 Branch Protection Rule을 사용하였습니다.
- husky를 이용하여 로컬에서 코드 포맷과 테스트를 통과해야 Commit이 되도록 하였습니다
- Pull Request 시에 [Github Action](https://github.com/taesung1993/opgg-assignment/actions) 에서 코드 포맷과 테스트를 실행실 수 있도록 workflow를 작성하였습니다.
- 서버에서 오는 데이터, UI/UX를 위해 사용하는 전역 데이터를 각각 나누어서 관리하기 위해 React-query와 Recoil을 같이 사용하였습니다.
- 능숙하지는 않지만, 최근에 
Udemy라는 강의 사이트에서 TDD 강의를 수강했기 때문에 이를 
이용해보고자 영광스럽게도 첫 실전에 Jest 및 Testing library를 이용하여 
약간의 Unit 테스트를 작성해 보았습니다.
- 컴포넌트 디렉터리 구조는 [Atomic Design Pattern](https://zoomkoding.github.io/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/07/09/atomic-design-pattern.html)을 참조하였습니다.
