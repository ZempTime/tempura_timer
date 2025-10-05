import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { TimerType } from './types'

interface EditProps {
  timer: TimerType
}

export default function Edit({ timer }: EditProps) {
  return (
    <>
      <Head title="Editing timer" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing timer</h1>

        <Form
          timer={timer}
          onSubmit={(form) => {
            form.transform((data) => ({ timer: data }))
            form.patch(`/timers/${timer.id}`)
          }}
          submitText="Update Timer"
        />

        <Link
          href={`/timers/${timer.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this timer
        </Link>
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
