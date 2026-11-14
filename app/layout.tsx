import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홍바다 | Profile',
  description: '직관적인 사용자 경험부터 안정적인 백엔드 설계까지 아우르는 풀스택 개발자 홍바다입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
