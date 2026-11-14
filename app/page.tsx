export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {/* 아바타 / 프로필 아이콘 */}
        <div style={styles.avatar}>
          <span style={styles.avatarText}>🌊</span>
        </div>

        {/* 이름 */}
        <h1 style={styles.name}>홍바다</h1>

        {/* 뱃지 / 역할 태그 */}
        <span style={styles.tag}>Student & Creator</span>

        {/* 소개글 */}
        <p style={styles.bio}>
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 구분선 */}
        <hr style={styles.divider} />

        {/* 링크 목록 (Link-in-bio 스타일) */}
        <div style={styles.linkList}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkButton}
          >
            GitHub
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkButton}
          >
            Instagram
          </a>
          <a
            href="mailto:contact@example.com"
            style={styles.linkButton}
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    backgroundColor: '#f8fafc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#1e293b',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px 28px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
  },
  avatar: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    backgroundColor: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  avatarText: {
    fontSize: '42px',
  },
  name: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    letterSpacing: '-0.02em',
    color: '#0f172a',
  },
  tag: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '9999px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    fontSize: '13px',
    fontWeight: '500',
    marginBottom: '16px',
  },
  bio: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#475569',
    margin: '0 0 24px 0',
    wordBreak: 'keep-all',
  },
  divider: {
    width: '100%',
    border: 'none',
    borderTop: '1px solid #f1f5f9',
    margin: '0 0 24px 0',
  },
  linkList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  linkButton: {
    display: 'block',
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    color: '#334155',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
  },
};
