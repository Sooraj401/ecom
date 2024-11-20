import React from 'react'

const About = () => {
  return (
    <>
    <section className="bg-white text-center py-16 px-4 md:px-12 lg:px-20" id='about'>
      <div className="flex flex-col lg:flex-row items-center bg-[#0f293e] text-white rounded-lg overflow-hidden shadow-md">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/600x500?text=Curated+Art"
            alt="Curated Art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 p-8">
          <p className="text-lg mb-6">
            We offer a highly curated selection, so buyers are not overwhelmed by choice. Our collection is updated frequently with new works by current and incoming artists but quality, not quantity, is our focus.
          </p>
          <p className="font-semibold mb-8">Ashley Matthews — Founder</p>
          <button className="bg-white text-[#0f293e] py-2 px-6 rounded-full hover:bg-gray-200 transition-all">
            Read more
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
