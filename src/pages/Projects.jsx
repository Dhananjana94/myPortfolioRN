
import { Link } from 'react-router-dom'
import { projects } from '../constant'
import { arrow } from '../assets/icons'
import Cta from '../components/Cta'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className=' green-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-700'>
          I've worked on a variety of projects that have helped me grow as a professional. I've found creative solutions to boost efficiency and productivity.
          most of my projects are open-source, so feel free to explore the codebase and contribute your suggestions for
          further improvements.Your collaboration is highly appreciated!
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center item-cnter' >
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-xl font-poppins font-semibold text-slate-700'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-700'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-500'
                >
                  Go to project

                </Link>
                <img

                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-container' />
              </div>

            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-400' />
      <Cta />
    </section>

  )
}

export default Projects