// ReviewPage.jsx – 작성 폼 + 리뷰 목록 카드 스타일 + 홈으로 돌아가기

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function ReviewPage() {
  const [form, setForm] = useState({
    reviewerName: '',
    targetMentor: '',
    rating: 5,
    comment: '',
  });

  const [reviews, setReviews] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitReview = async () => {
    try {
      await api.post('/review', form);
      alert('리뷰 등록됨!');
      setForm({ reviewerName: '', targetMentor: '', rating: 5, comment: '' });
      fetchReviews();
    } catch {
      alert('리뷰 등록 실패');
    }
  };

  const fetchReviews = async () => {
    const res = await api.get('/review/all');
    setReviews(res.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>← 홈으로</Link>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>리뷰 작성</h2>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
        <input name="reviewerName" onChange={handleChange} value={form.reviewerName} placeholder="작성자" style={inputStyle} />
        <input name="targetMentor" onChange={handleChange} value={form.targetMentor} placeholder="멘토 이름" style={inputStyle} />
        <input name="rating" type="number" min="1" max="5" onChange={handleChange} value={form.rating} style={inputStyle} />
        <input name="comment" onChange={handleChange} value={form.comment} placeholder="코멘트" style={inputStyle} />
        <button onClick={submitReview} style={buttonStyle}>리뷰 등록</button>
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>전체 리뷰</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {reviews.map(r => (
          <div key={r.id} style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h4 style={{ marginBottom: '10px', color: '#333' }}>{r.reviewerName} → {r.targetMentor}</h4>
            <p style={{ margin: '4px 0', color: '#555' }}>{r.comment}</p>
            <p style={{ margin: '4px 0', color: '#888', fontSize: '14px' }}>{r.rating}점</p>
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

export default ReviewPage;