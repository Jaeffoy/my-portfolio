import React, { useRef } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'


export const ContactSection = () => {
    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'Jeffblack2428@yahoo.com',
            link: 'mailto:Jeffblack2428@yahoo.com'   
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+639912182511',
            link: 'tel: +639912182511'   
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'www.linkedin.com/in/mjj40/',
            link: 'https://www.linkedin.com/in/mjj40/'   
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Alburquerque, Bohol, Philippines',
            link: null   
        }
    ];
    const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        'service_p9v1pim',
        'template_pner70g',
        form.current,
        'pYRbzCuj0WENaKits'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.current?.reset()
        },
        (error) => {
  console.error('EmailJS Error:', error)
  alert(`Failed to send message: ${error.text || error.message}`)
}
      )
  }
  return (
    <section className='py-20 bg-gray-900' id='contact'>
        <div className='container mx-auto px-4 max-w-6xl'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2'>
                    Let's Connect.
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <p className='text-gray-400 mb-8 leading-relaxed'>
                        Great work starts with great collaboration. If you’re looking for someone who is committed, detail-oriented, and passionate about building solutions, let’s connect.
                    </p>
                    <div className='space-y-6'>
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            return (
                                <div key={info.id} className='flex items-center gap-4 group'>
                                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                        <Icon size={18} className='text-primary'/>
                                    </div>
                                    <div>
                                        <h4 className='text-white font-medium text-sm'>
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a href={info.link} className='text-gray-400 text-sm hover:text-primary transition-colors' target={info.title === 'Location' ? '_self' : '_blank'} rel={info.title === 'Location' ? '' : 'noopener noreferrer'}>
                                                {info.value}
                                            </a>
                                        ) : ( 
                                            <p className='text-gray-400 text-sm'>
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Contact Form */}
                <div className='bg-gray-800 rounded-lg p-6'>
                        <form  ref={form} onSubmit={sendEmail}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='text-white block mb-2 text-sm font-medium'>
                                    Name
                                </label>
                                <input type='text' id='name' name='name' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='Your Name' required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                                    Email
                                </label>
                                <input type='email' id='user_email' name='user_email' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='your@email.com' required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                                    Message
                                </label>
                                <textarea id='message' name='message' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='Your Message ....' rows={4} required />
                            </div>
                            <button type='submit' className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'>
                                Send Message
                            </button>
                        </form>
                </div>
            </div>
        </div>
    </section>
  )
}
