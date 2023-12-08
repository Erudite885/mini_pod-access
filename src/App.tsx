import React from 'react'
import PodComponent from './components/PodComponent'

const App: React.FC = () => {
  return (
    <div className='background bg-slate-900 w-[100vw] h-full '>
      <div className=' w-[100vw] h-full bg-black bg-opacity-80 lg:py-64  '>
       
        <header className='flex justify-center items-center md:items-start md:justify-start py-24 md:px-12 lg:px-32'>
          <div className='bg-emerald-300 rounded-full '>
            <img src="../../vite.svg" alt="pod logo" className='w-12 h-12 object-contain' />
          </div>
          <p className='text-3xl ml-2 font-extrabold'>pod</p>
        </header>
        
        <section className='h-[560px] py-8'>
          <PodComponent />
        </section>
       
      </div>
    </div>
  )
}

export default App