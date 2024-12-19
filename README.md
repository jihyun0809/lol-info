# LOL-Info
 ![image](https://github.com/user-attachments/assets/e4ee0be1-3dce-4485-af17-7b03efbebc48)

 <h2>프로젝트 개요</h2>


**LOL-Info**는 Riot Games의 API 및 Data Dragon을 활용하여 리그 오브 레전드의 다양한 데이터를 조회할 수 있는 웹 어플리케이션입니다.


## 📁 프로젝트 구조

📦app 
┣ 📂api 
┃ ┗ 📂rotation # Next.js에서 서버 측 API 라우트를 정의하는 폴더입니다. 
┃ 
┃ 
┗ 📜route.ts # /api/rotation 경로에 대한 서버 API 로직이 포함된 파일입니다. 
┣ 📂champions 
┃ 
┣ 📂[id] # 챔피언의 고유 ID에 따라 동적으로 라우트되는 페이지를 처리하는 폴더입니다. ┃ 
┃ 
┗ 📜page.tsx # /champions/[id] 경로에 대한 동적 페이지입니다. ID에 따라 특정   ┃챔피언의 상세 정보를 보여줍니다. 
┃ 
┗ 📜page.tsx # /champions 경로에 대한 정적 페이지입니다. 모든 챔피언 목록을 보여줍니다. 
┣ 📂items 
┃ 
┗ 📜page.tsx # /items 경로에 대한 정적 페이지입니다. 모든 아이템 목록을 보여줍니다. ┣ 📂rotation 
┃ 
┗ 📜page.tsx # /rotation 경로에 대한 정적 페이지입니다. 현재 로테이션 상태를 보여줍니다. 
┣ 📜error.tsx # 애플리케이션 전역에서 에러 페이지를 처리하는 파일입니다.
┣ 📜globals.css # 애플리케이션 전역 스타일 파일입니다. 
┣ 📜layout.tsx # 애플리케이션의 레이아웃을 정의하는 파일입니다. 
┗ 📜page.tsx # 메인 페이지

---

## 🌐 주요 페이지 및 렌더링 방식

1. **홈페이지**
   - 렌더링 방식: **Server Side Rendering (SSR)**
   - 각 상세 페이지로 이동 가능
   - 메타데이터 설정을 통한 SEO 향상
   - 다크 모드 기능으로 UX 개선
   - 반응형 디자인 지원

2. **챔피언 리스트 페이지**
   - 렌더링 방식: **Incremental Static Regeneration (ISR)**
   - 하루마다 정보가 갱신
   - 이미지 최적화 적용
   - `ListCard` 컴포넌트 활용으로 재사용성 증대

3. **챔피언 상세 페이지**
   - 렌더링 방식: **Server Side Rendering (SSR)**
   - 페이지별 메타데이터 설정
   - 동적 라우팅으로 ID에 따라 페이지 생성

4. **아이템 리스트 페이지**
   - 렌더링 방식: **Static Site Generation (SSG)**
   - 정적 생성으로 빠른 로드

5. **챔피언 로테이션 페이지**
   - 렌더링 방식: **Client Side Rendering (CSR)**
   - 현재 무료 플레이 가능한 챔피언들을 보여줌
   - 클라이언트에서 최신 로테이션 데이터를 가져옴
=======
