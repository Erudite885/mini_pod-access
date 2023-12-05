import React from 'react'
import PodForm from './PodForm'

const PodComponent:React.FC = () => {
  return (
    <div className=' bg-slate-900 flex flex-col text-center py-8 px-6'>
      <h2 className='uppercase text-3xl text-emerald-300 font-mono font-thin'>publish your podcasts <br/> <span className='text-white'>everywhere.</span></h2>
      <p className='py-5 text-zinc-400'>Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
      <div className='py-4 flex flex-col-reverse md:flex-col'>
        <PodForm />
        <div className='flex'><img src="../../vite.svg" alt="" /><img src="../../vite.svg" alt="" /><img src="../../vite.svg" alt="" /><img src="../../vite.svg" alt="" /></div>
      </div>
      
    </div>
  )
}

export default PodComponent