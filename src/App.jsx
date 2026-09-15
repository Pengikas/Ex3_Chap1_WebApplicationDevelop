import { useState } from 'react'

function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="page-title">
        <p className="eyebrow">A tiny React beginning</p>
        <h1 id="page-title">Hello, World<span aria-hidden="true">.</span></h1>
        <p className="intro">
          Your first component is alive. Start editing <code>src/App.jsx</code> and make it yours.
        </p>
        <button type="button" onClick={() => setClicks((count) => count + 1)}>
          {clicks === 0 ? 'Say hello' : `Hello x${clicks}`}
        </button>
        <p className="status" aria-live="polite">
          {clicks === 0 ? 'Ready when you are.' : 'React state is working.'}
        </p>
      </section>
      <footer>Built with React + Vite</footer>
    </main>
  )
}

export default App
