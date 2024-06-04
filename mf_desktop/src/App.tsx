import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import Main from './components/Layout/Main'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Main></Main>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
