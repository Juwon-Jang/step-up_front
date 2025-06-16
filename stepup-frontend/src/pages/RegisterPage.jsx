import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    name: '',
    studentNumber: '',
    role: 'MENTOR',
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await api.post('/users/register', form);
      alert('회원가입 성공!');
      navigate('/'); // ← 홈페이지로 이동
    } catch (err) {
      alert('회원가입 실패: ' + err.response?.data?.message);
    }
  };

  return (
    <div style={{ background: '#f1f1f1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>← 홈으로</Link>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>회원가입</h2>
        <input name="username" placeholder="아이디" onChange={handleChange} style={inputStyle} />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} style={inputStyle} />
        <input name="name" placeholder="이름" onChange={handleChange} style={inputStyle} />
        <input name="studentNumber" placeholder="학번" onChange={handleChange} style={inputStyle} />
        <select name="role" onChange={handleChange} style={inputStyle}>
          <option value="MENTOR">멘토</option>
          <option value="MENTEE">멘티</option>
        </select>
        <button onClick={handleRegister} style={buttonStyle}>회원가입</button>
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

export default RegisterPage;
