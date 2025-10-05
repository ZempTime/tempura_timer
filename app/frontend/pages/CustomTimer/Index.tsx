import { Head } from '@inertiajs/react'
import { useState, useEffect } from "react"

export default function Index() {
  const [time, setTime] = useState(0.00);
  const [running, setRunning] = useState(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      if (running) {
        setTime(prev => prev + 0.01)
      }
    }, 1)

    if (!running) clearInterval(timerId);
  }, [running])


  return (
    <>
      <Head title="Custom Timer" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {time}

        <div>
          <button onClick={() => setRunning(true)}>Start</button>
          <br />
          <button onClick={() => setRunning(false)}>Stop</button>
        </div>
      </div>
    </>
  )
}
