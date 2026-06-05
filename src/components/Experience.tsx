import { Layout, Cpu, Briefcase, Building, Calendar } from 'lucide-react'
import React from 'react'

type Experience = {
  id: number
  role: string
  company: string
  date: string
  desc: string[]
}

export const Experience = () => {
  const skills = [
    { id: 1, name: 'Typescript', icon: Cpu },
    { id: 2, name: 'CSS & HTML', icon: Layout },
    { id: 3, name: 'Javascript', icon: Cpu },
    { id: 4, name: 'REACT TS', icon: Cpu },
    { id: 5, name: 'TAILWIND CSS', icon: Layout },
  ]

  const Experiences: Experience[] = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'Talleco.com Inc',
      date: 'July 2022 - April 2026',
      desc: [
        'Junior Software Developer with three years of hands-on experience supporting backend systems and maintaining web scrapers.',
        'Responsible for fixing production issues, updating XPath logic, and ensuring accurate job data ingestion across platforms.',
        'Works closely with QA and internal teams to deliver reliable solutions.',
      ],
    },
    {
      id: 2,
      role: 'Transaction Processor',
      company: 'Conduent',
      date: 'July 2013 - March 2022',
      desc: [
        'Performs high-volume data encoding tasks while maintaining accuracy and consistency.',
        'Transported items safely and responsibly to minimize risk.',
        'Worked flexibly and in adherence to health and safety practices.',
      ],
    },
    {
      id: 3,
      role: 'Production Associate',
      company: 'Innodata Knowledge Services, Inc.',
      date: 'July 2011 - June 2013',
      desc: [
        'Handled data processing tasks, ensuring quality and meeting daily production targets.',
      ],
    },
  ]

  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* SKILLS */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Technical <span className="text-primary">Skills</span>
            </h2>

            <div className="space-y-8">
              {skills.map((skill) => {
                const SkillIcon = skill.icon

                return (
                  <div key={skill.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#111a3e] rounded-lg">
                          <SkillIcon size={20} className="text-primary" />
                        </div>

                        <span className="font-medium tracking-wide">
                          {skill.name}
                        </span>
                      </div>

                      
                    </div>

                    <div className="h-2 w-full bg-[#131d30] rounded-full p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
              Work <span className="text-primary">Experience</span>
            </h2>

            <div className="space-y-6">
              {Experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative p-6 rounded-2xl bg-[#1f1641] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex gap-4">

                    <div className="shrink-0 mt-1">
                      <div className="p-3 bg-[#050816] rounded-xl border border-gray-800">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                    </div>

                    <div className="grow">

                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Building size={14} className="text-primary" />
                          {exp.company}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" />
                          {exp.date}
                        </span>
                      </div>

                      <ul className="mt-3 list-disc pl-5 text-sm text-gray-400 space-y-1">
                        {exp.desc.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}