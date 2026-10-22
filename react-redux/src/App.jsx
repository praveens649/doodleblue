import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="app">
      <section className="counter-card" aria-labelledby="counter-title">
        <p className="eyebrow">Redux Toolkit</p>
        <h1 id="counter-title">Simple counter</h1>
        <p className="description">
          A small example using a slice, a Redux store, and React Redux hooks.
        </p>

        <output className="count" aria-live="polite">
          {count}
        </output>

        <div className="controls">
          <button type="button" onClick={() => dispatch(decrement())}>
            −
            <span className="sr-only">Decrease count</span>
          </button>
          <button type="button" onClick={() => dispatch(increment())}>
            +
            <span className="sr-only">Increase count</span>
          </button>
        </div>

        <button className="reset" type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </section>
    </main>
  )
}

export default App
