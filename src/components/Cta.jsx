import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Hay want to know something? <br className='sm:block hidden'/>
            Let's talk
        </p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default Cta