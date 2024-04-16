import React, { useState } from 'react';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });



  const handleChange=(e)=>{
    const{name,value} = e.target;
    console.log(e.target);
    setFormData({...formData,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', formData);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="bg-Bg text-white p-8 rounded-lg w-full flex flex-col items-center">
    <div className='md:w-4/5'>
    <h1 className="sm:text-4xl text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <div className='flex gap-4 flex-wrap  '>
            <input

            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input-field rounded-lg p-2 bg-Bg border-Border border-2 text-white  placeholder-white grow sm:basis-[8%]  "
            required
            />
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input-field rounded-lg p-2  bg-Bg border-Border border-2  placeholder-white text-white grow"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$"
            title="Please enter a valid email address."
            />
        </div>

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-field rounded-lg p-2  bg-Bg border-Border border-2 text-white placeholder-white flex grow"
          required
        >
          <option value="">Choose Your Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Feedback">Feedback</option>
         
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type Your Message Here..."
          className="input-field rounded-lg p-2  bg-Bg border-Border border-2  placeholder-white text-white flex grow"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="submit-button rounded-lg p-2 bg-Logo border-Border border-2 text-black text-xl font-semibold
         ">
          Submit Inquiry
        </button>
      </form>
    </div>
      
    </div>
  );
};

export default QueryForm;
