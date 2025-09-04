import React from 'react';

const Academy = () => {
  const courses = [
    {
      id: 1,
      title: "Boost Your LinkedIn Acquisition Strategy",
      description: "With over 6 years of experience in LinkedIn prospecting, Frédéric, our co-founder, shares advanced strategies, tips, and techniques to maximize your LinkedIn account effectiveness. Master the art of connection building and lead generation.",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    },
    {
      id: 2,
      title: "Master LinkedIn Copywriting Excellence",
      description: "Sending messages is one thing; crafting compelling copy that converts is another. Learn proven messaging frameworks, templates, and psychological triggers that drive response rates and generate qualified meetings.",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    },
    {
      id: 3,
      title: "LinkedIn KPIs & Performance Analytics",
      description: "What metrics truly matter for LinkedIn success? Learn to track, analyze, and optimize the right KPIs - from acceptance rates to conversion metrics. Implement data-driven strategies for continuous campaign improvement.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    },
    {
      id: 4,
      title: "Sales Navigator Mastery",
      description: "Unlock the full potential of LinkedIn's premium prospecting tool. Learn advanced filtering techniques, list building strategies, and workflow optimizations to build highly targeted prospect databases that convert.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    },
    {
      id: 5,
      title: "Advanced Response Handling Techniques",
      description: "Transform prospects into clients through strategic conversation management. Learn proven methodologies for handling objections, building rapport, and guiding conversations toward qualified meetings.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    },
    {
      id: 6,
      title: "MirrorProfiles Platform Expertise",
      description: "Maximize your ROI with our comprehensive platform training. Learn to efficiently manage multiple accounts, automate workflows, and leverage advanced features to scale your LinkedIn prospecting efforts.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cta: "Access The Training"
    }
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">LinkedIn Mastery Academy</h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] mx-auto mb-3 rounded-full"></div>
        <p className="text-md text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Elevate your professional outreach with expert-led training programs. Our academy, led by Frédéric—co-founder and LinkedIn strategist with over 6 years of specialized experience—provides the comprehensive knowledge needed to master LinkedIn prospecting and maximize your MirrorProfiles investment.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full border border-gray-100">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Course {course.id}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow" >{course.description}</p>
              <button className="group bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 self-start flex items-center">
                {course.cta}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] rounded-2xl p-10 text-center mt-8 mb-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
        
        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Transform Your LinkedIn Strategy?</h2>
        <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto relative z-10">
          Join thousands of professionals who have accelerated their growth through our comprehensive training program.
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl relative z-10 flex items-center justify-center mx-auto">
          Explore All Courses
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white rounded-2xl p-8 shadow-md mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Frédéric - Co-founder" 
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-100 shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Instructor
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn From an Industry Expert</h3>
            <p className="text-gray-700 text-lg mb-4 italic">"Our academy is designed to provide practical, actionable strategies that deliver real results. We've helped thousands of professionals transform their LinkedIn approach and achieve measurable growth."</p>
            <div>
              <p className="font-bold text-gray-900">Frédéric</p>
              <p className="text-gray-600">Co-founder & LinkedIn Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;