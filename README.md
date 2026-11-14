# mylink

Next.js와 TypeScript 기반의 개인 프로필 링크 (Link-in-bio) 웹 애플리케이션입니다.

## 시작하기

의존성 패키지가 설치된 후, 로컬 개발 서버를 실행할 수 있습니다:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

## 주요 기능 및 구성

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **페이지 구성**:
  - `app/layout.tsx`: 기본 메타데이터 및 전체 레이아웃
  - `app/page.tsx`: 모바일 친화적인 링크인바이오 카드 스타일 프로필 페이지
