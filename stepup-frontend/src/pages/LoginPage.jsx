// LoginPage.jsx – 로그인 완료 후 홈페이지로 이동 + 왼쪽 상단 '홈으로' 버튼 추가

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await api.post('/users/login', form);
      alert(`환영합니다, ${res.data.name}님`);
      navigate('/');
    } catch (err) {
      alert('로그인 실패: ' + err.response?.data?.message);
    }
  };

  return (
    <div style={{ background: '#f1f1f1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>← 홈으로</Link>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>로그인</h2>
        <input
          name="username"
          placeholder="아이디"
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <button
          onClick={handleLogin}
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
