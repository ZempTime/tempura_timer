import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { TimerType } from './types'

interface NewProps {
  timer: TimerType
}

export default function New({ timer }: NewProps) {
  return (
    <>
      <Head title="New timer" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New timer</h1>

        <Form
          timer={timer}
          onSubmit={(form) => {
            form.transform((data) => ({ timer: data }))
            form.post('/timers')
          }}
          submitText="Create Timer"
        />

        <Link
          href="/timers"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to timers
        </Link>
      </div>
    </>
  )
}
