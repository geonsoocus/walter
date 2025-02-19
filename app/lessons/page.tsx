import React from 'react';

interface Lesson {
  id: number;
  title: string;
  coach: string;
  level: string;
  price: number;
  location: string;
}

export default function LessonsPage() {
  const lessons: Lesson[] = [
    {
      id: 1,
      title: "기초 풋살 클래스",
      coach: "김코치",
      level: "입문",
      price: 50000,
      location: "서울 마포구"
    },
    {
      id: 2,
      title: "중급자 풋살 강습",
      coach: "이코치",
      level: "중급",
      price: 70000,
      location: "서울 강남구"
    },
    {
      id: 3,
      title: "고급 전술 훈련",
      coach: "박코치",
      level: "고급",
      price: 100000,
      location: "서울 송파구"
    }
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">풋살 레슨</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
            <div className="space-y-2">
              <p>코치: {lesson.coach}</p>
              <p>레벨: {lesson.level}</p>
              <p>가격: {lesson.price.toLocaleString()}원</p>
              <p>위치: {lesson.location}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 