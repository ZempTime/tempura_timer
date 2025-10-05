import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Timer from './Timer'
import { TimerType } from './types'

interface IndexProps {
  timers: TimerType[]
  flash: { notice?: string }
}

export default function Index({ timers, flash }: IndexProps) {
  return (
    <>
      <Head title="Timers" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Timers</h1>
          <Link
            href="/timers/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New timer
          </Link>
        </div>

        <div className="min-w-full">
          {timers.map((timer) => (
            <Fragment key={timer.id}>
              <Timer timer={timer} />
              <p>
                <Link
                  href={`/timers/${timer.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this timer
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
