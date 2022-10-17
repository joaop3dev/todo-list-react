// import { useState } from 'react'
import { Check } from 'phosphor-react'
import { useState } from 'react'

interface CheckboxProps {
  onTaskDone(): void,
  done: boolean
}

export function Checkbox({ onTaskDone, done }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(done)

  console.log(done)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)

    onTaskDone()
  }

  return (
    <div onClick={handleCheckboxChange} className={
      isChecked ? 'w-8 h-8 cursor-pointer bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-300' : 'w-8 h-8 rounded-full flex items-center justify-center border-solid border-4 border-blue-300 cursor-pointer hover:border-blue-500'
    }>
      {
        isChecked ? <Check size={24} color="white" /> : null
      }
    </div>
  )
}
