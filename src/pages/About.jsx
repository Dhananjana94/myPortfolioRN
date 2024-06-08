import React from 'react'
import { skills, experiences } from '../constant';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cta from '../components/Cta';


const About = () => {
  return (
    <section className='max-container'>

      <h1 className='head-text'>
        Hello I'm <span className=' green-gradient_text font-semibold drop-shadow'>Nadun</span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-700'>
          Innovative and dedicated Software Engineer from Sri Lanka.
          specializing in software development through hands-on learning and developing with variety of programming languages and technologies
        </p>
      </div>

      <div className='py-20 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-16 h-16'>
              <dic className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center item-center'>

                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-container'
                />

              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='py-20'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div>
          <p className='mt-5 flex flex-col gap-3 text-slate-700'>
            I've collaborated with some companies, enhancing my skills and
            working alongside talented individuals. Here's an overview:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
              
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'> 
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}
                  iconStyle={{
                    background:experience.iconBg
                  }}

                  contentStyle={{
                    borderBottom: '5px',
                    borderStyle:'solid',
                    borderBottomColor: experience.iconBg,
                  }}
                  
                
              
              >
                <div>
                  <h3 className='text-blue-400 text-xl font-poppins font-semibold '>
                    {experience.title}</h3>
                  <p className='text-slate-800 font-extralight font-base ' >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5'>
                  {experience.points.map((point,index) => (
                    <li key={`experience-point-${index}`} className='text-black-500 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
        <hr className='border-slate-400'/>
        <Cta/>
    </section>
  )
}

export default About