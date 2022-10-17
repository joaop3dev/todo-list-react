interface CounterProps {
  text: string
  allTasks: number
  counter?: number
}

export function Counter({ counter, text, allTasks }: CounterProps) {
  return (
    <div className='flex gap-2 font-bold text-md items-center'>
      <p className={
        counter === allTasks ? 'text-blue-300' : 'text-purple-300'
      }>{text}</p>
      <span className="text-sm font-gray-100 bg-gray-400 rounded-full px-2">
        {
          counter === undefined ? allTasks : counter === 0 ? '0' : ` ${counter} de ${allTasks}`
        }
      </span>
    </div>
  )
}
