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
        I'm a performance and utility focused software engineer with a passion for health and fitness. Throughout my experience, I have developed a flexible mindset with the ability to see different aspects of a problem and explore alternative methods to construct an effective solution. My passion for software engineering is driven by my desire to help elevate people’s health and happiness.

        I'm interested in developing machine learning skills. AI has incredible potential and I look forward to being a part of it.
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
