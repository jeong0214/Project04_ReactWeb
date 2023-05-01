## <p align="center" style="background-color:#EAF4FF"><img src="./ReadmeImg/logo.png" height="20px"> <span>강원도API 활용<br>리액트기반 반응형 웹사이트</span> </p>

###### <p align="center">클릭 시 데모 사이트 이동 <br>👇[![텍스트](./ReadmeImg/siteImg.png)](https://jeong0214.github.io/Project04_ReactWeb/)</p>

---

### 📋프로젝트 소개

강원도 반려동물 동반 API활용 리액트기반 반응형 웹사이트 만들기

### 📌프로젝트 목적

반려동물 동반 여행지를 찾는 이용자들을 위해 여행지 정보를 한눈에 알아보기 쉽게 정리 및 원하는 키워드,위치등으로 검색가능 기능 추가 제공

### 📅프로젝트 기간

2023년 4월10일 ~ 2023년 5월 08일

### 👥프로젝트 역할

기획 : 오정석, 김현우

디자인/프론트 : 오정석

### 🛠사용 툴

<div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=Github&logoColor=white" />
	<img src="https://img.shields.io/badge/Figma-F24e1e?style=flat&logo=Figma&logoColor=white" />
</div>

### 🔗프로젝트 링크

###### <p align="left">약식기획서 (Google Slide)[![텍스트](./ReadmeImg/briefPlan.png)](https://docs.google.com/presentation/d/1QlMgt9Q1HwoknFtCTHYVSkb39hF79r5V2cSc8E-BUy4/edit?usp=sharing)</p>
###### <p align="left">디자인 시안 (피그마)[![텍스트](./ReadmeImg/figma.png)](https://www.figma.com/file/X3dZkvNlJOnyDw3GPHWlcd/4%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%A9%8D%EB%83%A5%EC%9D%B4%EB%9E%91?node-id=0%3A1&t=y5UWV4usFotboNmd-1)</p>

### 💡프로젝트 내 기능구현

▪ 메인 페이지 키워드 슬라이드에 키워드 랜덤 표시
▪ 지역별 데이터에 맞춰 각 지역 페이지 배너이미지 변경
▪ 검색 모달에 지역명,상품명,키워드데이터를 필터처리해 검색기능 추가
▪ 동물병원 위치 안내 페이지에 병원명으로 검색기능 추가 및 선택 시 카카오맵에 마커 표시

### 📝작업 히스토리

<p><img src="./ReadmeImg/GWTO.png"></p>
사이트에 메인 데이터로 사용 할 API를 불러오는 과정에서 한가지 문제점이 발생하였는데 API 데이터가 한 경로에 담겨있는 게 아니라 여러 경로에 데이터가 나눠져 있어 AXIOS로 데이터를 불러 올 수 없는 문제가 발생하였습니다. <br> 
이 문제를 해결하기 위해 json에 데이터를 담아 사용하기로 하였는데 데이터들이 많아 수작업으로는 힘들어 API데이터의 나눠져 있는 데이터들의 경로 규칙성을 알아네 해당 경로 데이터 하나씩 불러와 json에 에러코드를 제외한 데이터를 받는 코드를 짜 사이트에서 사용 될 JSON데이터 파일을 만들어 문제를 해결 하였습니다.
