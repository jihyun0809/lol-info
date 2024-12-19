<<<<<<< HEAD
# LOL-Info

**LOL-Info**는 Riot Games의 API 및 Data Dragon을 활용하여 리그 오브 레전드의 다양한 데이터를 조회할 수 있는 웹 어플리케이션입니다.

---

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
<h1>lol-info</h1>
 
 ![image](https://github.com/user-attachments/assets/e4ee0be1-3dce-4485-af17-7b03efbebc48)


<h2>프로젝트 개요</h2>
lol-info는Riot Games의 API 및 Data Dragon을 활용하여
게임 리그오브레전드 의 다양한 데이터를 조회할 수 있는 웹 어플리케이션입니


<h3>프로젝트 구조</h3>
📦app
 ┣ 📂api  #Next.js에서 서버 측 API 라우트를 정의하는 폴더입니다
 ┃ ┗ 📂rotation  #로테이션 관련 API 처리를 위한 디렉토리입니다.
 ┃ ┃ ┗ 📜route.ts  #/api/rotation 경로에 대한 서버 API 로직이 포함된 파일입니다.
 ┣ 📂champions
 ┃ ┣ 📂[id]  #챔피언의 고유 ID에 따라 동적으로 라우트되는 페이지를 처리하는 폴더입니다.
 ┃ ┃ ┗ 📜page.tsx  #/champions/[id] 경로에 대한 동적 페이지입니다. ID에 따라 특정 챔피언의 상세 정보를 보여줍니다.
 ┃ ┗ 📜page.tsx  #/champions 경로에 대한 정적 페이지입니다. 모든 챔피언 목록을 보여줍니다.
 ┣ 📂items
 ┃ ┗ 📜page.tsx  #/items 경로에 대한 정적 페이지입니다. 모든 아이템 목록을 보여줍니다.
 ┣ 📂rotation  #로테이션과 관련된 페이지를 처리하는 디렉토리입니다.
 ┃ ┗ 📜page.tsx  #/rotation 경로에 대한 정적 페이지입니다. 현재 로테이션 상태를 보여줍니다.
 ┣ 📜error.tsx  #애플리케이션 전역에서 에러 페이지를 처리하는 파일입니다. 사용자에게 에러 정보를 보여줍니다.
 ┣ 📜globals.css  #애플리케이션 전역 스타일 파일입니다. 모든 컴포넌트에 공통으로 적용되는 CSS 규칙이 포함됩니다.
 ┣ 📜layout.tsx  #애플리케이션의 레이아웃을 정의하는 파일입니다. 모든 페이지에 공통으로 적용되는 레이아웃을 설정합니다. 예: 헤더, 푸터, 네비게이션 바 등.
 ┗ 📜page.tsx   #메인 페이지

1.홈페이지
렌더링 방식 : Server Side Rendering (SSR)
각 상세페이지로 이동할 수 있음
메타데이터 설정을 통해 SEO향상
다크모드 기능으로 UX향상
반응형
2. 챔피언 리스트 페이지
렌더링 방식 : Incremental Static Regeneration (ISR)
ISR방식으로 정보가 하루마다 갱신됨
이미지 최적화를 위해 <Image> 사용
LIstCard 컴포넌트로 재사용성을 높임
3️. 챔피언 상세 페이지
렌더링 방식 : Server Side Rendering (SSR)
페이지별 메타데이터 설정
동적 라우팅으로 id에 따라 페이지 생성
4️. 아이템 리스트 페이지
렌더링 방식 : Static Site Generation (SSG)
아이디, 비밀번호, 이름 값 등록
프로필 이미지
5️. 챔피언 로테이션
렌더링 방식 : Client Side Rendering (CSR)
현재 무료로 플레이 가능한 챔피언들을 확인할 수 있는 페이지
로테이션 데이터는 주기적으로 변경되므로 클라이언트에서 최신 데이터를 가져옴
>>>>>>> 97f51da02fa82b900472251fe714df4fe454123c
