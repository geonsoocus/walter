'use client'
import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Modal from './Modal'; // 모달 컴포넌트 import

const Container = styled.div`
  background-color: #f5f5f5;  // 밝은 회색
  display: grid;
  align-items: center;  
  justify-items: center;
  min-height: 100vh;
  padding: 2rem 2rem 5rem 2rem;
  gap: 4rem;
  
  @media (min-width: 640px) {
    padding: 5rem;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  z-index: 1;  // 오버레이 위에 표시
`;

const Overlay = styled.div`
  position: fixed;  // 고정 위치
  top: 0;           // 상단에 위치
  left: 50%;        // 중앙 정렬을 위해 왼쪽 50%
  transform: translateX(-50%);  // 중앙 정렬
  width: 33.33%;    // 화면의 1/3 너비
  height: 100%;     // 전체 높이
  background-color: rgba(0, 0, 0, 0.5);  // 반투명 검정색 배경
  z-index: 0;       // 다른 요소 아래에 표시
`;

const LessonList = styled.div`
  width: 100%;
  display: grid;  // 그리드 레이아웃 사용
  grid-template-columns: repeat(2, 1fr);  // 2열
  gap: 20px; // 항목 간격
`;

const LessonItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img`
  width: 80px;  // 원하는 크기로 조정
  height: auto; // 비율을 유지하기 위해 auto로 설정
  margin-right: 20px;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Overlay />
      <MainContent>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>플랩풋볼 레슨</h1>
        
        <LessonList>
          {/* 더미 데이터 6개 추가 */}
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 1</h3>
              <p className="student-level">학생 수준: 초급</p>
              <p className="student-sex">학생 성별: 남성</p>
              <p className="lesson-district">레슨 지역: 서울</p>
              <p className="lesson-stadium">레슨 구장: 구장 A</p>
            </div>
          </LessonItem>
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 2</h3>
              <p className="student-level">학생 수준: 중급</p>
              <p className="student-sex">학생 성별: 여성</p>
              <p className="lesson-district">레슨 지역: 부산</p>
              <p className="lesson-stadium">레슨 구장: 구장 B</p>
            </div>
          </LessonItem>
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 3</h3>
              <p className="student-level">학생 수준: 초급</p>
              <p className="student-sex">학생 성별: 남성</p>
              <p className="lesson-district">레슨 지역: 인천</p>
              <p className="lesson-stadium">레슨 구장: 구장 C</p>
            </div>
          </LessonItem>
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 4</h3>
              <p className="student-level">학생 수준: 중급</p>
              <p className="student-sex">학생 성별: 여성</p>
              <p className="lesson-district">레슨 지역: 대전</p>
              <p className="lesson-stadium">레슨 구장: 구장 D</p>
            </div>
          </LessonItem>
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 5</h3>
              <p className="student-level">학생 수준: 초급</p>
              <p className="student-sex">학생 성별: 남성</p>
              <p className="lesson-district">레슨 지역: 광주</p>
              <p className="lesson-stadium">레슨 구장: 구장 E</p>
            </div>
          </LessonItem>
          <LessonItem>
            <img
              src="https://via.placeholder.com/80"
              alt="레슨 썸네일"
              width={80}
              height={80}
              style={{ marginRight: '20px' }}
            />
            <div>
              <h3 className="title">레슨 제목 6</h3>
              <p className="student-level">학생 수준: 중급</p>
              <p className="student-sex">학생 성별: 여성</p>
              <p className="lesson-district">레슨 지역: 대구</p>
              <p className="lesson-stadium">레슨 구장: 구장 F</p>
            </div>
          </LessonItem>
        </LessonList>

        <div className="mb-8">
          <Link 
            href="/lessons" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            풋살 레슨 보기
          </Link>
        </div>

        <FloatingButton onClick={openModal}>
          +
        </FloatingButton>

        {isModalOpen && <Modal onClose={closeModal} />} {/* 모달 표시 */}
      </MainContent>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer 내용은 기존과 동일하게 유지 */}
      </footer>
    </Container>
  );
}