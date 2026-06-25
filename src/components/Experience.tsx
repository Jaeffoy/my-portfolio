import { Layout, Cpu, Briefcase, Building, Calendar } from 'lucide-react'

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
        'Analyze ticket requirements and communicate with the requester to clarify specifications, collaborating with Tech Leads to address technical challenges in the requirements.',
        'Change the status of the ticket currently being worked on to "Dev In Progress."',
        'Set up a New Source in Integration Admin, including configuring the Source, Files, and notifying recipients.',
        'Create ETL Source Mapping, transforming raw job data into a standardized format in line with user requirements, specifications, and established coding standards, policies, and procedures.',
        'Upload ETL Source Mapping to MongoDB.',
        'Establish BRE Rules in OC Admin based on ticket requirements and specifications.',
	'Develop Importer & Auto Router based on the ticket`s requirements.',
	'Execute queries to check job information in the database.',
	'Manually run the script for testing and execute queries to verify job information in the database.',
	'Check jobs in OC Admin and conduct thorough unit testing before submitting the ticket to QA. ',
	'Deploy the Spider after the ticket is QA and UAT approved.',
	'Ensure the ticket is released to production properly.',
	'Resolve the ticket once changes in production are verified.',
	'Monitor tickets due within the next 3 days and ensure development is completed on or before the due date.',
	'Proactively coordinate with Project Managers in case of issues meeting developer due dates, staging dates, and production deploy dates.',
	'Review assigned tickets to ensure proper due dates are set.',
	'Coordinate with Project Managers to address any issues.',
	'Report to the Project Manager any tickets at risk of missing developer, staging upload, and production deploy due dates.',
	'Create technical specifications documentation (if the task is already endorsed by the customer) for functional modifications and feature request projects, with a degree of difficulty ranging from easy to moderate. ',
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