'use client'
import styled from '@emotion/styled'

interface Lesson {
  id: number;
  title: string;
  coach: string;
  level: string;
  price: number;
  location: string;
}

const MainContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const LessonCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`

const LessonTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default function LessonsPage() {
  const lessons: Lesson[] = [
    {
      id: 1,
      title: "기초 풋살 클래스",
      coach: "건스쿠스",
      level: "입문",
      price: 50000,
      location: "서울 마포구"
    },
    {
      id: 2,
      title: "중급자 풋살 강습",
      coach: "오코치",
      level: "중급",
      price: 270000,
      location: "서울 강남구"
    },
    {
      id: 3,
      title: "고급 전술 훈련",
      coach: "아쿠치",
      level: "고급",
      price: 100000,
      location: "서울 송파구"
    }
  ];

  return (
    <MainContainer>
      <Title>풋살 레슨</Title>
      <LessonGrid>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id}>
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonInfo>
              <p>코치: {lesson.coach}</p>
              <p>레벨: {lesson.level}</p>
              <p>가격: {lesson.price.toLocaleString()}원</p>
              <p>위치: {lesson.location}</p>
            </LessonInfo>
          </LessonCard>
        ))}
      </LessonGrid>
    </MainContainer>
  );
} 