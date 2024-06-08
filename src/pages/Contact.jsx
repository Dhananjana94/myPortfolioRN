
import React, { Suspense, useRef, useState } from 'react'
import emailJs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Boy from '../models/Boy'
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setLoading] = useState(false);
  const [currentAnimation, setAnimation] = useState('idle');
 // const [animationInterval, setAnimationInterval] = useState(null);

 const{alert,showAlert,hideAlert} = useAlert();

  //handleChange update all the property of form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  // get final keyPress event of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // call mail service after submit
    setAnimation('run');

    // setTimeout(() => {}, [3000]);
    emailJs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        // get form data

        form_name:form.name,
        to_name:'Nadun',
        from_email:form.email,
        to_email:'mail2nadundw@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      //show success message
      showAlert({show: true,text:'Message sent successfully',type:'success'});

      //hide alert
      setTimeout(() => {
        hideAlert();
        setAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      },[3000])
      
      
    }).catch(err => {
      setLoading(false);
      console.log(err);
      showAlert({show: true,text:"Didn't get the message",type:'danger'});
      //show error message
    })
  }; //handle react mail service

  const handleFocus = () => setAnimation('idle'); //handle models when you click on the feild of form
  const handleBlur = () => {
    // if (animationInterval) {
    //   clearInterval(animationInterval);
    //   setAnimationInterval(null);
    // }
    setAnimation('tchau');
  }; //handle models when you click out the feild of form

  const handleMouseOver = () => {
    setAnimation('press');
  };

  const handleMouseOut = () => {
    setAnimation('idle');
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container '>

      {alert.show && <Alert {...alert}/>}
      {/* <Alert text="test"/> */}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form
          className='w-full flex flex-col gap-3 mt-12'
          onSubmit={handleSubmit}
        >

          <label className='text-black-500 font-semibold'> Name
            <input type='text' name='name' placeholder='please enter your name' className='input' required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'> Email
            <input type='email' name='email' placeholder='please enter your email' className='input' required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'> Your Message
            <textarea  name='message' placeholder="Let's talk" 
              rows={4}
              className='textarea'
              required 
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
             
            />
          </label>

          
          <button
            type='submit' className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
           
          >
            {isLoading ? 'Sending ........' : 'Sent Message'}
          </button>

        </form>

      </div>
      <div className='lg:w-1/2 w-fulllg:h-auto md:h-[550px] h-[350px]'>
        <Canvas

          camera={{
            position: [0, 0, 2],

          }}
        >
          <directionalLight intensity={2} position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Boy
              currentAnimation={currentAnimation}
              position={[0, -1, 0]}

            />
          </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Contact