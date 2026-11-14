import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홍바다 | Profile',
  description: '안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.',
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
