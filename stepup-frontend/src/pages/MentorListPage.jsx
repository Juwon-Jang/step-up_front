// MentorListPage.jsx – 깔끔한 카드 스타일 + 홈으로 돌아가기 버튼 추가

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function MentorListPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    api.get('/users/mentors')
      .then(res => setMentors(res.data))
      .catch(() => alert('멘토 불러오기 실패'));
  }, []);

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>← 홈으로</Link>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>멘토 리스트</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {mentors.map(m => (
          <div key={m.id} style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>{m.name}</h3>
            <p style={{ margin: '4px 0', color: '#555' }}>아이디: {m.username}</p>
            <p style={{ margin: '4px 0', color: '#555' }}>학번: {m.studentNumber}</p>
            <p style={{ margin: '4px 0', color: '#888', fontStyle: 'italic' }}>{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorListPage;
