
import React,{useRef, useState} from 'react'


const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState({name: '',email:'',message:''})
  const[isLoading,setLoading] = useState(false);
   
  //handleChange update all the property of form
  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
  };

   // get final keyPress event of the form
   const handleSubmit = () => {
    e.preventDefault();
    setLoading(true); // call mail service after submit
   }; //handle react mail service

  const handleFocus =(e) => {
    
  }; //handle models when you click on the feild of form
  const handleBlur = () => {}; //handle models when you click out the feild of form
  
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form 
        className='w-full flex flex-col gap-3 mt-12'
        onSubmit={handleSubmit}
        >

          <label className='text-black-500 font-semibold'> Name 
            <input type='text' name='name' placeholder='please enter your name' className='input' required 
            value ={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>

          <label className='text-black-500 font-semibold'> Email 
            <input type='email' name='email' placeholder='please enter your email' className='input' required 
            value ={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          </label>

          <label className='text-black-500 font-semibold'> Your Message 
            <textarea type='text' name='mesage' placeholder="Let's talk" rows ={4} 
            className='textarea' required 
            value ={form.message}
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
          
          >
            {isLoading ? 'Sending ........' : 'Sent Message'}
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact