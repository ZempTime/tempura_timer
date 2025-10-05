import { TimerType } from './types'

interface TimerProps {
  timer: TimerType
}

export default function Timer({ timer }: TimerProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {timer.name?.toString()}
      </p>
    </div>
  )
}
