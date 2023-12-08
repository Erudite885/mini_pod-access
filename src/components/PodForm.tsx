import React, { useState } from 'react'

const PodForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // const emailChangeHandler = (e: React.ChangeEventHandler<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // }

  const validateEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Oops! Please add your email')
    } else if (!validateEmail()) {
      setErrorMessage('Oops! Please check your email.')
    } else {
      setEmail('')
      console.log('form submitted')
    }
  }

  console.log(email)

  return (
    <form onSubmit={submitHandler} className='flex flex-col py-8 gap-5 lg:w-[25rem] '>
      <input className='py-[0.6em] md:py-[0.8em] px-[1.2em] md:px-[2em] rounded-[2rem] md:relative ' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
      <button type='submit' className='cursor-pointer text-slate-950 bg-emerald-400 rounded-[2rem] tracking-wide md:absolute md:right-48 md:my-[3px] lg:right-[31.3rem] xl:right-[63.6%] '>Request Access</button>
      {/* {!errorMessage && email && <p>Thank you {email}. Access has been requested successfully, you will receive an email shortly.</p> } */}
      {errorMessage && <div className='text-red-600 mt-2'>{errorMessage}</div>}
    </form>
  )
}

export default PodForm