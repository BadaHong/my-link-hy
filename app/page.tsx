'use client';

import React, { useState } from 'react';

type TabType = 'links' | 'tech' | 'projects';

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

interface TechCategory {
  name: string;
  skills: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('links');

  const techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'HTML5/CSS3'],
    },
    {
      name: 'Backend & Database',
      skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Prisma', 'RESTful API'],
    },
    {
      name: 'DevOps & Tools',
      skills: ['Git / GitHub', 'Docker', 'Vercel', 'AWS EC2', 'Figma', 'Postman'],
    },
  ];

  const projects: Project[] = [
    {
      title: 'MyLink (개발자 프로필 & 링크트리)',
      category: 'Frontend / Personal',
      description: 'Next.js 기반의 개인 브랜딩 및 포트폴리오를 위한 인터랙티브 링크인바이오 웹앱',
      techStack: ['Next.js', 'TypeScript', 'React'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://github.com',
    },
    {
      title: 'DevLog (풀스택 기술 블로그)',
      category: 'Full Stack',
      description: '마크다운 에디터 지원, 실시간 조회수 집계 및 태그 기반 기술 아티클 공유 플랫폼',
      techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
      githubUrl: 'https://github.com',
    },
    {
      title: 'TaskFlow (실시간 칸반 협업 툴)',
      category: 'Full Stack / Team',
      description: 'WebSocket을 이용한 실시간 보드 동기화 및 드래그 앤 드롭 업무 관리 대시보드',
      techStack: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://github.com',
    },
  ];

  const links = [
    {
      title: 'GitHub',
      subtitle: '오픈소스 프로젝트 & 커밋 활동',
      url: 'https://github.com',
      icon: '🐙',
    },
    {
      title: 'Tech Blog',
      subtitle: '개발 회고와 기술 정리 기록',
      url: 'https://velog.io',
      icon: '✍️',
    },
    {
      title: 'LinkedIn',
      subtitle: '학력 및 커리어 프로필',
      url: 'https://linkedin.com',
      icon: '💼',
    },
    {
      title: 'Contact / Email',
      subtitle: '협업 문의 & 커피챗 제안',
      url: 'mailto:contact@example.com',
      icon: '✉️',
    },
  ];

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
        <span style={styles.tag}>Full Stack Developer</span>

        {/* 소개글 */}
        <p style={styles.bio}>
          직관적인 사용자 경험부터 안정적인 백엔드 설계까지 아우르는 풀스택 개발자입니다. 코드로 일상의 문제를 해결하고 가치 있는 서비스를 만들어갑니다.
        </p>

        {/* 탭 네비게이션 */}
        <div style={styles.tabContainer}>
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'links' ? styles.tabButtonActive : {}),
            }}
          >
            🔗 링크
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tech')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'tech' ? styles.tabButtonActive : {}),
            }}
          >
            ⚡ 기술스택
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'projects' ? styles.tabButtonActive : {}),
            }}
          >
            🚀 프로젝트
          </button>
        </div>

        {/* 탭 콘텐츠 영역 */}
        <div style={styles.tabContent}>
          {/* 링크 탭 */}
          {activeTab === 'links' && (
            <div style={styles.linkList}>
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkCard}
                >
                  <span style={styles.linkIcon}>{link.icon}</span>
                  <div style={styles.linkTextContainer}>
                    <span style={styles.linkTitle}>{link.title}</span>
                    <span style={styles.linkSubtitle}>{link.subtitle}</span>
                  </div>
                  <span style={styles.arrowIcon}>→</span>
                </a>
              ))}
            </div>
          )}

          {/* 기술스택 탭 */}
          {activeTab === 'tech' && (
            <div style={styles.techContainer}>
              {techCategories.map((cat, idx) => (
                <div key={idx} style={styles.techCategoryCard}>
                  <h3 style={styles.techCategoryTitle}>{cat.name}</h3>
                  <div style={styles.chipWrapper}>
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} style={styles.techChip}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 프로젝트 탭 */}
          {activeTab === 'projects' && (
            <div style={styles.projectList}>
              {projects.map((proj, idx) => (
                <div key={idx} style={styles.projectCard}>
                  <div style={styles.projectHeader}>
                    <span style={styles.projectCategory}>{proj.category}</span>
                    <h3 style={styles.projectTitle}>{proj.title}</h3>
                  </div>
                  <p style={styles.projectDescription}>{proj.description}</p>
                  <div style={styles.chipWrapper}>
                    {proj.techStack.map((tech, tIdx) => (
                      <span key={tIdx} style={styles.projectTechChip}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.projectLinkButton}
                    >
                      GitHub
                    </a>
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.projectLinkButton, ...styles.demoLinkButton }}
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
    padding: '32px 16px',
    backgroundColor: '#f8fafc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#1e293b',
  },
  card: {
    width: '100%',
    maxWidth: '460px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '36px 24px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
  },
  avatar: {
    width: '92px',
    height: '92px',
    borderRadius: '50%',
    backgroundColor: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  avatarText: {
    fontSize: '40px',
  },
  name: {
    fontSize: '26px',
    fontWeight: '700',
    margin: '0 0 6px 0',
    letterSpacing: '-0.02em',
    color: '#0f172a',
  },
  tag: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '9999px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '14px',
    border: '1px solid #dbeafe',
  },
  bio: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#475569',
    margin: '0 0 22px 0',
    wordBreak: 'keep-all',
  },
  tabContainer: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '20px',
    boxSizing: 'border-box',
    gap: '4px',
  },
  tabButton: {
    flex: 1,
    padding: '10px 4px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#64748b',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  tabButtonActive: {
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontWeight: '600',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.06)',
  },
  tabContent: {
    width: '100%',
  },
  // 링크 탭 스타일
  linkList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  linkCard: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '14px 16px',
    borderRadius: '14px',
    backgroundColor: '#f8fafc',
    color: '#334155',
    textDecoration: 'none',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
    textAlign: 'left',
  },
  linkIcon: {
    fontSize: '22px',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  linkTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0f172a',
  },
  linkSubtitle: {
    fontSize: '12px',
    color: '#64748b',
  },
  arrowIcon: {
    fontSize: '16px',
    color: '#94a3b8',
    marginLeft: '8px',
  },
  // 기술스택 탭 스타일
  techContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    textAlign: 'left',
  },
  techCategoryCard: {
    padding: '14px 16px',
    borderRadius: '14px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
  },
  techCategoryTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#334155',
    margin: '0 0 10px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  techChip: {
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontSize: '12px',
    fontWeight: '500',
    border: '1px solid #e2e8f0',
  },
  // 프로젝트 탭 스타일
  projectList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    textAlign: 'left',
  },
  projectCard: {
    padding: '16px',
    borderRadius: '14px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  projectCategory: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#2563eb',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
  },
  projectDescription: {
    fontSize: '13px',
    lineHeight: '1.5',
    color: '#475569',
    margin: 0,
    wordBreak: 'keep-all',
  },
  projectTechChip: {
    display: 'inline-block',
    padding: '3px 8px',
    borderRadius: '6px',
    backgroundColor: '#e2e8f0',
    color: '#334155',
    fontSize: '11px',
    fontWeight: '500',
  },
  projectLinks: {
    display: 'flex',
    gap: '8px',
    marginTop: '4px',
  },
  projectLinkButton: {
    padding: '6px 12px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#334155',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #cbd5e1',
    display: 'inline-block',
    transition: 'all 0.15s ease',
  },
  demoLinkButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderColor: '#2563eb',
  },
};
