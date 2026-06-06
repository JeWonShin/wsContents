# CLAUDE.md — 쪽갈비 체인 홈페이지

## 프로젝트 개요

쪽갈비 체인점의 모바일 우선 정적 홈페이지. 일반 손님 안내와 가맹 모집을 동시에 지원하는 6~7페이지 구성.
관리자 시스템 없음 — 모든 콘텐츠 변경은 HTML 직접 수정 후 Netlify 재배포로 처리한다.

**예상 총 작업량**: 약 50~60시간 | **기간**: 4주 (주 15시간 기준)

---

## 기술 스택

| 영역 | 선택 | 비고 |
|------|------|------|
| 마크업 | HTML5 | 빌드 도구 없음 |
| 스타일 | Tailwind CSS (CDN) | 커스텀 보완은 `css/custom.css` |
| 인터랙션 | Vanilla JS | 프레임워크 미사용 |
| 지도 | 카카오맵 JavaScript API | 무료 한도 충분 |
| 폼 처리 | Formspree (무료 50건/월) | 초과 시 EmailJS 전환 |
| 호스팅 | Netlify (무료) | drag & drop 또는 CLI 배포 |
| 도메인 | 가비아 `.co.kr` | 연 13,500원 |
| SSL | Netlify 자동 (Let's Encrypt) | |
| 분석 | Google Analytics 4 | |

**React/Next.js 사용 금지** — 정적 사이트 규모에 오버스펙이다.
**빌드 도구 없음** — `npm`, `webpack`, `vite` 등 불필요. Claude Code와 직접 작업 시 가장 빠르다.

---

## 디렉토리 구조

```
jjokgalbi/
├── index.html          # 메인
├── about.html          # 브랜드 소개
├── menu.html           # 메뉴
├── stores.html         # 매장 안내
├── franchise.html      # 가맹 안내
├── contact.html        # 가맹 문의
├── news.html           # 공지/소식 (선택)
├── css/
│   └── custom.css      # Tailwind CDN으로 해결 안 되는 보완용
├── js/
│   ├── main.js         # 공통: 헤더, 푸터, 모바일 햄버거 메뉴
│   ├── stores.js       # 매장 검색/필터 로직
│   ├── map.js          # 카카오맵 초기화 및 마커
│   └── contact.js      # 폼 유효성 검증 + Formspree POST
├── images/
│   ├── logo.svg
│   ├── hero/           # 히어로 이미지
│   ├── menu/           # 메뉴 사진
│   ├── stores/         # 매장 사진
│   └── about/          # 브랜드 소개 사진
├── components/
│   ├── header.html     # 재사용 헤더 조각
│   └── footer.html     # 재사용 푸터 조각
├── data/
│   └── stores.json     # 매장 데이터 (lat/lng 포함)
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

---

## 디자인 시스템

### 컬러
- **메인**: `#8B2331` (적갈색)
- **포인트**: `#B8860B` (골드)
- Tailwind config에서 커스텀 컬러로 등록해 사용

### 폰트
- **Noto Sans KR** (Google Fonts CDN)
- 모든 HTML `<head>`에 포함

### 반응형 브레이크포인트 (Tailwind 기본)
- 모바일: `< 768px` (기준, 1열)
- 태블릿: `md: 768px` (2열)
- PC: `lg: 1024px` / `xl: 1440px` (3~4열)

---

## 페이지별 섹션 구성

### index.html (메인) — 6~8h
1. 헤더 (sticky, 스크롤 시 배경 등장)
2. 히어로: 풀스크린 이미지 + 한 줄 카피 + CTA 버튼
3. 브랜드 차별점 4가지 (아이콘 + 키워드 + 설명)
4. 시그니처 메뉴 미리보기 (3~4카드 + "전체 메뉴 보기" 버튼)
5. 매출/리뷰 신뢰 섹션 (숫자 카운터 애니메이션, Intersection Observer)
6. 매장 찾기 미리보기 (지도 + "전체 매장 보기" 버튼)
7. 가맹 모집 배너 (CTA 강조)
8. 푸터

### about.html (브랜드 소개) — 3~4h
창업 스토리 → 대표 인사말 → 쪽갈비 차별점 → 식재료/원산지 인포그래픽 → 연혁 타임라인

### menu.html (메뉴) — 4~6h
- 카테고리 탭: 전체 / 시그니처 / 사이드 / 식사 / 주류
- 메뉴 그리드: PC 4열, 태블릿 3열, 모바일 2열
- 메뉴 카드: 사진 + 이름 + 가격 + 매운맛/인분 배지
- 클릭 시 모달 상세 뷰 (선택)

### stores.html (매장 안내) — 8~10h ← 가장 오래 걸리는 페이지
- 지역 필터 버튼 (서울/경기/인천/…)
- 카카오맵 (전체 매장 마커 표시)
- 매장 리스트 (사진 + 정보 카드)
- 매장 클릭 → 지도 포커싱 + 카드 강조
- 검색바: 매장명/주소 클라이언트 사이드 필터
- **매장 데이터는 `data/stores.json`으로 관리** (백엔드 불필요)

### franchise.html (가맹 안내) — 5~7h
헤드라인 + 매출 수치 → 본사 경쟁력 5가지 → 창업 비용표 → 창업 절차 다이어그램 → 수익성 분석표 → 점주 추천사 → CTA (contact.html 이동)

### contact.html (가맹 문의) — 4~6h
- 안내 문구 + 상담 전화번호
- 문의 폼: 이름(필수), 연락처(필수, `010-0000-0000` 패턴), 희망지역(필수), 창업경험(선택), 희망예산(선택), 추가문의(선택), 개인정보동의(필수)
- Formspree로 POST → 성공/실패 메시지 표시
- FAQ 섹션

### news.html (공지/소식) — 3~4h, 선택
공지/이벤트 탭 → 카드 리스트 → 상세는 모달 또는 별도 페이지
변경 시 HTML 직접 편집 후 재배포 (관리자 없음)

---

## 핵심 코딩 규칙

### HTML
- 모든 페이지에 동일한 `<head>` 구조 유지 (Tailwind CDN, Noto Sans KR, GA4 스크립트)
- `<header>`, `<main>`, `<footer>` 시맨틱 태그 사용
- 이미지는 `loading="lazy"` 기본 적용, WebP 형식 우선

### CSS / Tailwind
- Tailwind 유틸리티 클래스 우선 사용
- 반복되는 컴포넌트 스타일만 `css/custom.css`에 추출
- 커스텀 컬러는 Tailwind `style` 태그 config 블록에 정의:
  ```html
  <script>
    tailwind.config = {
      theme: { extend: { colors: { brand: '#8B2331', gold: '#B8860B' } } }
    }
  </script>
  ```

### JavaScript
- 빌드 도구 없으므로 ES6+ 모듈 (`type="module"`) 사용 가능
- DOM 조작은 `querySelector` / `querySelectorAll` 사용
- 이벤트 위임 패턴 선호 (동적 생성 요소 대응)
- `stores.js`의 필터링: `data/stores.json` fetch 후 클라이언트 사이드 처리

### 카카오맵 API
- API 키는 HTML에 직접 삽입 (정적 사이트이므로 환경변수 불필요)
- `map.js`에서 초기화, `stores.js`에서 마커/포커싱 제어
- 마커 클릭 이벤트와 리스트 카드 클릭 이벤트를 동기화

### Formspree 폼 처리 (`contact.js`)
```javascript
// 패턴: POST 후 버튼 비활성화, 성공/실패 메시지
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
  // 성공/실패 처리
});
```

### data/stores.json 구조
```json
[
  {
    "id": "gangnam",
    "name": "강남점",
    "region": "서울",
    "address": "서울 강남구 ...",
    "tel": "02-0000-0000",
    "lat": 37.123,
    "lng": 127.456,
    "hours": "11:00 - 22:00",
    "parking": true,
    "image": "images/stores/gangnam.webp"
  }
]
```

---

## 공통 컴포넌트

헤더와 푸터는 `components/header.html`, `components/footer.html`에 작성하고 `main.js`에서 `fetch`로 로드한다:

```javascript
// main.js
async function loadComponent(selector, path) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = await (await fetch(path)).text();
}
loadComponent('#header-placeholder', '/components/header.html');
loadComponent('#footer-placeholder', '/components/footer.html');
```

각 HTML 파일에는 `<div id="header-placeholder"></div>`와 `<div id="footer-placeholder"></div>`를 배치한다.

---

## 개발 순서 (WBS)

| Phase | 작업 | 예상 시간 |
|-------|------|-----------|
| Phase 1 (사전 준비) | 폴더 구조, 공통 컴포넌트, Tailwind 컬러 설정 | 5~8h |
| Phase 2 (자료 정리) | 이미지 WebP 변환, 매장/메뉴 JSON 작성 | 3~5h |
| Phase 3 (페이지 개발) | 공통→메인→메뉴→매장→가맹→문의→소개 순서 | 30~40h |
| Phase 4 (QA/최적화) | 모바일 실기기, Lighthouse 90+, SEO 태그 | 5~8h |
| Phase 5 (배포) | Netlify 연결, 도메인 DNS, Search Console | 2~3h |

---

## 배포 워크플로우

```bash
# Netlify CLI 배포
netlify deploy --prod --dir .

# 또는 GitHub 연동 후 main 브랜치 push로 자동 배포
git push origin main
```

콘텐츠 변경 시: HTML 수정 → 브라우저에서 확인 → `git push` 또는 Netlify drag & drop

---

## QA 체크리스트

### 디바이스
- [ ] iPhone Safari (실기기)
- [ ] Android Chrome (실기기)
- [ ] iPad
- [ ] PC Chrome / Edge / Safari (375px, 768px, 1024px, 1440px)

### 기능
- [ ] 모든 내부 링크 동작
- [ ] 햄버거 메뉴 열기/닫기
- [ ] 카카오맵 로드 및 마커 표시
- [ ] 매장 필터/검색 동작
- [ ] 문의 폼 제출 → 이메일 수신 확인
- [ ] 폼 유효성 검증 (빈 값, 잘못된 연락처 형식)
- [ ] 전화번호 클릭 → 전화 앱 연결 (모바일)

### 성능/SEO
- [ ] Lighthouse Performance 90+
- [ ] 첫 화면 로드 3초 이내
- [ ] 이미지 WebP, `loading="lazy"` 적용
- [ ] 페이지별 `<title>`, `<meta name="description">` 작성
- [ ] OG 태그 (카카오톡/페이스북 공유 미리보기)
- [ ] `LocalBusiness` JSON-LD 구조화 데이터
- [ ] `robots.txt`, `sitemap.xml` 존재

### 법적
- [ ] 푸터: 사업자등록번호, 대표자명, 주소, 전화
- [ ] 개인정보처리방침 페이지 (문의 폼 운영 시 필수)

---

## 운영 비용

| 항목 | 비용 |
|------|------|
| 도메인 `.co.kr` 갱신 | 연 13,500원 |
| Netlify 호스팅 | 무료 |
| Formspree (50건/월 이내) | 무료 |
| 카카오맵 API | 무료 |
| Google Analytics 4 | 무료 |

문의가 월 50건 초과 시 → Formspree 유료 ($10/월) 또는 EmailJS로 전환

---

## AI 어시스턴트 지침

### 작업 시 반드시 지킬 것
- **빌드 도구 제안 금지** — npm, webpack, vite, React, Next.js 등 도입 제안 불가
- **CDN 방식 유지** — Tailwind, Google Fonts 모두 `<link>`/`<script>` CDN으로 로드
- **카카오맵 API 키** — 환경변수 처리 불필요, HTML에 직접 삽입
- **매장 데이터** — 항상 `data/stores.json`으로 관리, 하드코딩 금지
- **이미지** — WebP 형식 우선, `loading="lazy"` 필수, 경로는 `images/` 하위
- **반응형** — 모바일 우선 (`sm:` 없이 기본값이 모바일)

### 새 페이지 추가 시
1. `<div id="header-placeholder"></div>` + `<div id="footer-placeholder"></div>` 포함
2. `<head>`에 Tailwind CDN, Noto Sans KR, GA4 스크립트 포함
3. 페이지별 `<title>`과 `<meta name="description">` 작성
4. 해당 JS 파일을 `js/` 아래에 별도 생성

### 콘텐츠 변경 시 (메뉴/매장/공지)
- 매장 추가/수정: `data/stores.json` 수정
- 메뉴 추가/수정: `menu.html` 카드 HTML 직접 수정
- 공지 추가: `news.html` 카드 HTML 직접 추가
- 수정 후 Netlify 재배포 (약 30분 작업)

### 미결정 항목 (클라이언트 답변 대기)
- 도메인 최종 주소
- 브랜드 공식 컬러 확정 여부 (현재 `#8B2331` 임시 사용)
- 가맹 모집 콘텐츠 공개 범위 (매출 수치 등)
- 연락처 이메일 / 전화번호 / 카카오톡 채널
- SNS 계정 주소
- 메인 히어로 사진/영상 보유 여부
