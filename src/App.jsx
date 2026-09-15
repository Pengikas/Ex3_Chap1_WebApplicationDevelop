import { useState } from 'react'

function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <main className="page-shell">
      <section className="hello-card" aria-labelledby="page-title">
        <p className="eyebrow">My first React project</p>
        <h1 id="page-title">Hello, World<span aria-hidden="true">!</span></h1>
        <p className="intro">A small React app is running successfully.</p>
        <button type="button" onClick={() => setClicks((count) => count + 1)}>
          {clicks === 0 ? 'Say hello' : `Hello x${clicks}`}
        </button>
        <p className="status" aria-live="polite">
          {clicks === 0 ? 'Ready when you are.' : 'React state is working.'}
        </p>
      </section>
    </main>
  )
}

export default App
