export interface TimerType {
  id: number
  name: string
}

export type TimerFormType = Omit<TimerType, 'id'>
