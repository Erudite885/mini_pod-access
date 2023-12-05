import React from 'react'

const PodForm: React.FC = () => {
  return (
    <form className='flex flex-col py-5 gap-5'>
      
      <input className='py-2 px-4 rounded-[2rem]' type="email" placeholder='Email address' />
      <button type='submit' className='text-emerald-950 bg-emerald-700 rounded-[2rem] font'>Request Access</button>
    </form>
  )
}

export default PodForm