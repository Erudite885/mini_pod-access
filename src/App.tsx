import React from 'react'
import PodComponent from './components/PodComponent'

const App: React.FC = () => {
  return (
    <div className='bg-rose-400 w-full h-full'>
      <div className='h-[560px] bg-lime-300'>
        <PodComponent />
      </div>
    </div>
  )
}

export default App