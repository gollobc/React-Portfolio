import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
        <p>Resume</p>
      </nav>

      <h1>Cade Gollob</h1>

      <div>
        <p>

        </p>
      </div>
      
      <footer>
        <a href='https://github.com/gollobc' target='_blank' rel="noreferrer noopener"><i className="fa-brands fa-github" ></i></a>
        <a href='https://linkedin.com/in/cadegollob' target='_blank' rel="noreferrer noopener"><i className="fa-brands fa-linkedin" ></i></a>
      </footer>
    </>
  )
}

export default App
