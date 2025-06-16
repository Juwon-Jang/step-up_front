// MentoringPage.jsx – 등록 폼 + 멘토링 목록 카드 스타일 + 홈으로 돌아가기

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function MentoringPage() {
  const [form, setForm] = useState({
    topic: '',
    description: '',
    mentorName: '',
    scheduledDateTime: '',
  });

  const [sessions, setSessions] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'scheduledDateTime' && value.length === 16 ? value + ':00' : value });
  };

  const submitMentoring = async () => {
    try {
      await api.post('/mentoring/register', form);
      alert('등록 성공!');
      setForm({ topic: '', description: '', mentorName: '', scheduledDateTime: '' });
      fetchList();
    } catch {
      alert('등록 실패');
    }
  };

  const fetchList = async () => {
    const res = await api.get('/mentoring/all');
    setSessions(res.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>← 홈으로</Link>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>멘토링 등록</h2>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
        <input name="topic" onChange={handleChange} value={form.topic} placeholder="주제" style={inputStyle} />
        <input name="description" onChange={handleChange} value={form.description} placeholder="설명" style={inputStyle} />
        <input name="mentorName" onChange={handleChange} value={form.mentorName} placeholder="멘토 이름" style={inputStyle} />
        <input name="scheduledDateTime" type="datetime-local" onChange={handleChange} value={form.scheduledDateTime} style={inputStyle} />
        <button onClick={submitMentoring} style={buttonStyle}>등록</button>
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>멘토링 목록</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {sessions.map(s => (
          <div key={s.id} style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h4 style={{ marginBottom: '10px', color: '#333' }}>{s.topic}</h4>
            <p style={{ margin: '4px 0', color: '#555' }}>{s.description}</p>
            <p style={{ margin: '4px 0', color: '#555' }}>멘토: {s.mentorName}</p>
            <p style={{ margin: '4px 0', color: '#888', fontSize: '14px' }}>{s.scheduledDateTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default MentoringPage;
