import React, { useState } from 'react'

const PodForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  // const emailChangeHandler = (e: React.ChangeEventHandler<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  console.log(email)
  return (
    <form onSubmit={submitHandler} className='flex flex-col py-5 gap-5'>
      <input className='py-2 px-4 rounded-[2rem]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
      <button type='submit' className='cursor-pointer text-emerald-950 bg-emerald-700 rounded-[2rem] font'>Request Access</button>
    </form>
  )
}

export default PodForm