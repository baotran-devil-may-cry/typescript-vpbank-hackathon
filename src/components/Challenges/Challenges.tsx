import React from 'react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  technologies: string[];
  prize: string;
  icon: React.ReactNode;
}

const challenges: Challenge[] = [
  {
    id: 'fintech-innovation',
    title: 'FinTech Innovation Challenge',
    description: 'Phát triển giải pháp công nghệ tài chính sáng tạo để cải thiện trải nghiệm khách hàng trong lĩnh vực ngân hàng số.',
    difficulty: 'Advanced',
    category: 'FinTech',
    technologies: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
    prize: '500,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'ai-banking',
    title: 'AI-Powered Banking',
    description: 'Xây dựng chatbot thông minh hoặc hệ thống AI để hỗ trợ khách hàng trong các giao dịch ngân hàng.',
    difficulty: 'Intermediate',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'TensorFlow', 'NLP', 'API Integration'],
    prize: '300,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'blockchain-security',
    title: 'Blockchain Security',
    description: 'Phát triển giải pháp bảo mật dựa trên blockchain cho các giao dịch tài chính và quản lý danh tính số.',
    difficulty: 'Advanced',
    category: 'Blockchain',
    technologies: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum'],
    prize: '400,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking UX',
    description: 'Thiết kế và phát triển ứng dụng mobile banking với trải nghiệm người dùng tối ưu và tính năng sáng tạo.',
    difficulty: 'Intermediate',
    category: 'Mobile Development',
    technologies: ['React Native', 'Flutter', 'UI/UX Design', 'Mobile Security'],
    prize: '250,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'data-analytics',
    title: 'Financial Data Analytics',
    description: 'Xây dựng hệ thống phân tích dữ liệu tài chính để dự đoán xu hướng thị trường và đánh giá rủi ro.',
    difficulty: 'Beginner',
    category: 'Data Science',
    technologies: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
    prize: '200,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'open-innovation',
    title: 'Open Innovation Track',
    description: 'Thử thách mở cho các ý tưởng sáng tạo không giới hạn trong lĩnh vực công nghệ tài chính.',
    difficulty: 'Beginner',
    category: 'Open Track',
    technologies: ['Any Technology', 'Creative Solutions', 'Innovation'],
    prize: '150,000,000 VNĐ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Advanced':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function Challenges() {
  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Thử thách
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Các thử thách Hackathon
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chọn thử thách phù hợp với kỹ năng và đam mê của bạn. Mỗi thử thách đều có giải thưởng hấp dẫn 
            và cơ hội hợp tác với VPBank.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
            >
              {/* Challenge Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {challenge.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {challenge.category}
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </div>
              </div>

              {/* Challenge Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {challenge.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Công nghệ gợi ý:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {challenge.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prize */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Giải thưởng</div>
                  <div className="text-2xl font-bold text-green-600">
                    {challenge.prize}
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  Chọn thử thách
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quy tắc và hướng dẫn
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mỗi đội có thể chọn tối đa 2 thử thách</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sản phẩm phải được phát triển trong 48 giờ</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mã nguồn phải được public trên GitHub</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Demo sản phẩm trong 5 phút trước ban giám khảo</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                1+ tỷ VNĐ
              </div>
              <div className="text-lg text-gray-600 mb-6">
                Tổng giải thưởng
              </div>
              <a
                href="#registration"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-colors duration-200"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
