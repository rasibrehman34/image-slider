import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const imgs = ['./imgs/n1.jpg', './imgs/n2.jpg', './imgs/n3.jpg']

  const [index, setIndex] = useState(0)
  console.log(index)

  const prev = () => {
    setIndex((i) => (i - 1 + imgs.length) % imgs.length)
  }

  const next = () => {
    setIndex((i) => (i + 1) % imgs.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <>
      <div className="container">
        <div className="slider">
          <img className='slider1' src={imgs[index]} alt="" />
          <div className="btns">
            <button onClick={prev} className='left'>&lt;</button>
            <button onClick={next} className='right'>&gt;</button>
          </div>
        </div>

        <div className="dots">
          {imgs.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active-dot' : ''}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
