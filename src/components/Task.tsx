import { Trash } from 'phosphor-react'
import { Checkbox } from './Checkbox'

interface TaskProps {
  id: string
  title: string,
  done: boolean,
  onTaskDone(id: string): void,
  onTaskDelete(id: string): void
}

export function Task({ id, title, onTaskDone, onTaskDelete, done }: TaskProps) {
  function handleTaskDone() {
    onTaskDone(id)
  }

  function handleTaskDelete() {
    onTaskDelete(id)
  }

  return (
    <li className='flex justify-between bg-gray-400 p-4 rounded-md mt-8'>
      <div className='flex break-words'>
        <Checkbox
          onTaskDone={handleTaskDone}
          done={done}
        />
        <div className='ml-4'>
          <p className=''>{title}</p>
        </div>
      </div>
      <button onClick={handleTaskDelete} className='ml-8' type="button" >
        <Trash size={24} color="white" />
      </button>
    </li>
  )
}
