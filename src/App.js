import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(0);

  //! Step
  function stepIncrement() {
    setStep((s) => s + 1);
  }
  function stepDecrement() {
    setStep((s) => s - 1);
  }
  // ! Count

  const [count, setCount] = useState(0);

  function countIncrement() {
    setCount((c) => c + (step > 1 ? step : 1));
  }
  function countDecrement() {
    setCount((c) => c - (step > 1 ? step : 1));
  }

  return (
    <>
      <Step
        step={step}
        stepIncrement={stepIncrement}
        stepDecrement={stepDecrement}
      />

      <br />

      <Time count={count} />

      <br />

      <Count
        step={step}
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
      />
    </>
  );
}

function Step({ step, stepIncrement, stepDecrement }) {
  return (
    <div className="step">
      <button onClick={stepDecrement} className="dec">
        -
      </button>
      <span> Step: {step} </span>
      <button onClick={stepIncrement} className="inc">
        +
      </button>
    </div>
  );
}

function Count({ count, step, countDecrement, countIncrement }) {
  return (
    <div className="count">
      <button onClick={countDecrement} className="dec">
        -
      </button>
      <span> Count: {count} </span>
      <button onClick={countIncrement} className="inc">
        +
      </button>
    </div>
  );
}

function Time({ count }) {
  const date = new Date();

  const today = new Date().toDateString();

  const pastDay = new Date(date.getTime() - count * 1000 * 60 * 60 * 24);

  const yesterday = new Date(pastDay).toDateString();

  const nextDay = new Date(date.getTime() - count * 1000 * 60 * 60 * 24);

  const tommorow = new Date(nextDay).toDateString();

  return (
    <div className="date">
      {count === 0 && `today ${today}`}

      {count > 0 && `${count} days from ${yesterday}`}

      {count < 0 && `${Math.abs(count)} days for ${tommorow}`}
    </div>
  );
}
