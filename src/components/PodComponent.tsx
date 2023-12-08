import React from 'react'
import PodForm from './PodForm'

const PodComponent:React.FC = () => {
  return (
    <div className='flex flex-col text-center md:text-start md:w-[80%] px-8 md:bg-slate-900 md:py-12 lg:px-32'>
      <h2 className='uppercase text-xl sm:text-3xl md:text-4xl text-emerald-300 font-mono font-thin'>publish your podcasts <br/> <span className='text-white'>everywhere.</span></h2>
      <p className='py-5 text-zinc-400 md:w-[400px]'>Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
      <div className='py-4 md:py-1 flex flex-col-reverse md:flex-col'>
        <PodForm />
        <div className='flex mx-2 justify-center items-center md:my-4 lg:justify-start'>
          <img src="../../vite.svg" alt="" className='mr-3' />
          <img src="../../vite.svg" alt="" className='mr-3' />
          <img src="../../vite.svg" alt="" className='mr-3' />
          <img src="../../vite.svg" alt="" className='' />
        </div>
      </div>
      <footer className='hidden md:flex gap-2 text-emerald-300 h-20 lg:justify-end'>
        <div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
        </div>

        <div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div><div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
          <div className='text-4xl'>.</div>
       </div>
      </footer>
      
    </div>
  )
}

export default PodComponent