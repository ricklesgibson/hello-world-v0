import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#282c34')
  const [clicks, setClicks] = useState(0)

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const handleClick = () => {
    setBackgroundColor(getRandomColor())
    setClicks(clicks + 1)
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      transition: 'background-color 0.5s',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <img 
          src={viteLogo} 
          alt="Vite logo" 
          style={{
            height: '6rem',
            padding: '1.5em',
            willChange: 'filter',
            transition: 'filter 300ms'
          }}
        />
        <img 
          src={reactLogo} 
          alt="React logo" 
          style={{
            height: '6rem',
            padding: '1.5em',
            animation: 'spin 20s linear infinite',
          }}
        />
      </div>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <h1 style={{ 
        fontSize: '3.2em', 
        lineHeight: '1.1',
        marginBottom: '2rem'
      }}>
        Vite + React
      </h1>
      <button 
        onClick={handleClick}
        style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          border: '2px solid white',
          borderRadius: '8px',
          background: 'transparent',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.1s'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        Click me! ({clicks} clicks)
      </button>
    </div>
  )
}

export default App