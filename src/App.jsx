import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParagraphGenerator from './components/Para'
import { RecoilRoot } from 'recoil'

function App() {
 

  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Paragraph Generator</h1>
      <ParagraphGenerator/>
      </div>
    </RecoilRoot>
  )
}

export default App
