import { Head, Link } from '@inertiajs/react'
import Timer from './Timer'
import { TimerType } from './types'

interface ShowProps {
  timer: TimerType
  flash: { notice?: string }
}

export default function Show({ timer, flash }: ShowProps) {
  return (
    <>
      <Head title={`Timer #${timer.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Timer #{timer.id}</h1>

          <Timer timer={timer} />

          <Link
            href={`/timers/${timer.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this timer
          </Link>
          <Link
            href="/timers"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to timers
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/timers/${timer.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this timer
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
