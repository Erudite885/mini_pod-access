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
    <form onSubmit={submitHandler} className='flex flex-col py-5 gap-5'>
      <input className='py-2 px-4 rounded-[2rem]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
      <button type='submit' className='cursor-pointer text-emerald-950 bg-emerald-700 rounded-[2rem] font'>Request Access</button>
      {/* {!errorMessage && email && <p>Thank you {email}. Access has been requested successfully, you will receive an email shortly.</p> } */}
      {errorMessage && <div className='text-red-600 mt-2'>{errorMessage}</div>}
    </form>
  )
}

export default PodForm