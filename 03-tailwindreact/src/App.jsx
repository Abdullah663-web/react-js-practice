import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-100 p-5 rounded-lg mb-5'>Tailwind Test</h1>
     <Card username="ABdullah Developer" content="i am abdullah software engineer and ui ux designer and wordpress developer"/>
     <Card username="ABdullah UI & UX Designer" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet" btn="Visit ME"/>
     
    </>
  )
}

export default App
