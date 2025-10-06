import React from 'react';

interface TimelineEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  type: 'registration' | 'event' | 'deadline' | 'announcement';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '15/01/2025',
    time: '00:00',
    title: 'Mở đăng ký',
    description: 'Bắt đầu nhận đăng ký tham gia từ các đội thi',
    type: 'registration'
  },
  {
    date: '28/02/2025',
    time: '23:59',
    title: 'Hạn chót đăng ký',
    description: 'Kết thúc thời gian đăng ký tham gia',
    type: 'deadline'
  },
  {
    date: '05/03/2025',
    time: '18:00',
    title: 'Công bố đội thi',
    description: 'Thông báo danh sách các đội được chọn tham gia',
    type: 'announcement'
  },
  {
    date: '15/03/2025',
    time: '08:00',
    title: 'Khai mạc Hackathon',
    description: 'Lễ khai mạc và giới thiệu thử thách',
    type: 'event'
  },
  {
    date: '15/03/2025',
    time: '10:00',
    title: 'Bắt đầu coding',
    description: 'Chính thức bắt đầu 48 giờ lập trình',
    type: 'event'
  },
  {
    date: '17/03/2025',
    time: '10:00',
    title: 'Nộp sản phẩm',
    description: 'Hạn chót nộp sản phẩm và demo',
    type: 'deadline'
  },
  {
    date: '17/03/2025',
    time: '14:00',
    title: 'Thuyết trình',
    description: 'Các đội thuyết trình sản phẩm trước ban giám khảo',
    type: 'event'
  },
  {
    date: '17/03/2025',
    time: '18:00',
    title: 'Trao giải',
    description: 'Lễ trao giải và bế mạc sự kiện',
    type: 'announcement'
  }
];

const getTypeColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'registration':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'event':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'deadline':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'announcement':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getTypeIcon = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'registration':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      );
    case 'event':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'deadline':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'announcement':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Lịch trình sự kiện
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lịch trình Hackathon 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Theo dõi các mốc thời gian quan trọng của VPBank Technology Hackathon 2025
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Timeline events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(event.type)}`}>
                      {getTypeIcon(event.type)}
                    </div>
                  </div>
                  
                  {/* Event content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                          <div className="text-lg font-bold text-blue-600">
                            {event.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {event.time}
                          </div>
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(event.type)}`}>
                          {event.type === 'registration' && 'Đăng ký'}
                          {event.type === 'event' && 'Sự kiện'}
                          {event.type === 'deadline' && 'Hạn chót'}
                          {event.type === 'announcement' && 'Thông báo'}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Đừng bỏ lỡ cơ hội tham gia!
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Đăng ký ngay để nhận thông báo về các cập nhật mới nhất
            </p>
            <a
              href="#registration"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold text-lg transition-colors duration-200"
            >
              Đăng ký tham gia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
