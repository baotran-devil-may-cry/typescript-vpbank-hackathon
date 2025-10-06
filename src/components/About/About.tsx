import React from 'react';

interface HighlightCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const highlights: HighlightCard[] = [
  {
    number: "01",
    title: "Đổi mới sáng tạo",
    description: "Phát triển những ý tưởng đột phá trong lĩnh vực FinTech và Banking",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Công nghệ tiên tiến",
    description: "Ứng dụng AI, Blockchain, và các công nghệ mới nhất vào giải pháp tài chính",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Kết nối cộng đồng",
    description: "Gặp gỡ và học hỏi từ các chuyên gia hàng đầu trong ngành công nghệ",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Cơ hội nghề nghiệp",
    description: "Khám phá cơ hội việc làm và hợp tác với VPBank và các đối tác",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Về sự kiện
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            VPBank Technology Hackathon 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cuộc thi lập trình lớn nhất năm 2025 do VPBank tổ chức, tập hợp những tài năng công nghệ
            hàng đầu để cùng nhau xây dựng tương lai của ngành tài chính số tại Việt Nam.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Tại sao tham gia VPBank Technology Hackathon?
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                VPBank Technology Hackathon 2025 là sân chơi lý tưởng cho các developer, designer,
                và những người đam mê công nghệ muốn thể hiện tài năng và sáng tạo trong lĩnh vực FinTech.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Đây không chỉ là cuộc thi mà còn là cơ hội để bạn học hỏi, kết nối và phát triển
                những ý tưởng đột phá có thể thay đổi cách thức hoạt động của ngành ngân hàng số.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">48h</div>
                  <div className="text-sm text-gray-600">Coding Marathon</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1B+</div>
                  <div className="text-sm text-gray-600">Giải thưởng VNĐ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    {highlight.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-blue-600">
                  {highlight.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Focus Areas */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Lĩnh vực công nghệ trọng tâm
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Khám phá và phát triển giải pháp trong các lĩnh vực công nghệ hàng đầu
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="font-semibold mb-2">Artificial Intelligence</h4>
              <p className="text-sm text-blue-200">Machine Learning, NLP, Computer Vision</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="font-semibold mb-2">Blockchain</h4>
              <p className="text-sm text-blue-200">DeFi, Smart Contracts, Cryptocurrency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Mobile Banking</h4>
              <p className="text-sm text-blue-200">UX/UI, Security, Performance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="font-semibold mb-2">Cloud & API</h4>
              <p className="text-sm text-blue-200">Microservices, Integration, Scalability</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#registration"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold text-lg transition-colors duration-200"
            >
              Bắt đầu hành trình
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
