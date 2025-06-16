// HomePage.jsx – 가운데 정렬 + 배경색 + 상단 네비게이션 버튼 spacing 추가

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      {/* 상단 네비게이션 바 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 40px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <Link to="/" style={navLinkStyle}>🏠 홈</Link>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link to="/login" style={navLinkStyle}>로그인</Link>
          <Link to="/register" style={navLinkStyle}>회원가입</Link>
          <Link to="/mentors" style={navLinkStyle}>멘토 리스트</Link>
          <Link to="/mentoring" style={navLinkStyle}>멘토링</Link>
          <Link to="/reviews" style={navLinkStyle}>리뷰</Link>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '90%'
        }}>
          <img
            src="/stepup-illustration.png"
            alt="Step Up 설명 이미지"
            style={{ width: '60%', marginBottom: '20px' }}
            onError={(e) => e.target.style.display = 'none'}
          />

          <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#333' }}>
            Step Up - 멘토링 매칭 서비스
          </h1>
          <p style={{ marginBottom: '30px', color: '#666' }}>
            선후배 간 멘토링을 통해 진로와 학업을 함께 설계하세요!
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <Link to="/login" style={{ flex: 1 }}>
              <button style={{ ...buttonStyle, width: '100%' }}>로그인</button>
            </Link>
            <Link to="/register" style={{ flex: 1 }}>
              <button style={{ ...buttonStyle, backgroundColor: '#6c757d', width: '100%' }}>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
};

const navLinkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '16px'
};

export default HomePage;
