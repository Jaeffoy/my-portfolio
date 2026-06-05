import React from 'react'
import about from '../assets/me2.jpg'


export const AboutSection = () => {
  return (
    <section className='text-white mt-16 relative overflow-hidden' id='about'>
        <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5x1 font-extrabold text-white mb-6'>
                    More <span className='text-primary'>About</span> Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                    I am a dedicated and results-oriented IT professional with experience in quality assurance testing, web scraping, data processing, and troubleshooting. I have worked on identifying and resolving system issues, ensuring data accuracy, and supporting the development of reliable software solutions. With a strong attention to detail and a passion for continuous learning, I am seeking an opportunity to grow as a Software Developer where I can apply my technical skills, contribute to innovative projects, and further expand my expertise in software development and modern technologies.
                </p>
                
            </div>
            <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
                <div className='relative w-64 h-64 md:w-96 md:h-120'>
                    <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4'>
                        <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                            <img src={about} alt='About' className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
