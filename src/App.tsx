
import { ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { Counter } from './components/Counter'
import { Header } from './components/Header'

import { Task } from './components/Task'

interface TaskProps {
  id: string
  title: string
  done: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [couterTasksDone, setCounterTasksDone] = useState(0)

  useEffect(() => {
    const storageTasks = localStorage.getItem('@todo:tasks')

    if (storageTasks) {
      const tasks = JSON.parse(storageTasks)

      setTasks(tasks)

      const tasksDone = tasks.filter((task: TaskProps) => task.done === true)

      setCounterTasksDone(tasksDone.length)
    }
  }, [])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!newTaskTitle) return

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask])

    localStorage.setItem('@todo:tasks', JSON.stringify([...tasks, newTask]))

    setNewTaskTitle('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskTitle(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleToggleTaskDone(id: string) {
    const newTasks = tasks.map(task => task.id === id
      ? {
        ...task,
        done: !task.done
      }
      : task)

    setTasks(newTasks)

    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks))

    const tasksDone = newTasks.filter((task: TaskProps) => task.done === true)

    setCounterTasksDone(tasksDone.length)
  }

  function handleRemoveTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id)

    setTasks(newTasks)

    const tasksDone = newTasks.filter(task => task.done === true)

    localStorage.setItem('@todo:tasks', JSON.stringify(newTasks))

    setCounterTasksDone(tasksDone.length)
  }

  return (
    <div className='bg-gray-600 overflow-x-hidden text-gray-100 flex flex-col font-sans items-center'>
      <Header />
      <main className='w-8/12'>
        <form onSubmit={handleCreateNewTask} className='mt-[-2rem] flex justify-center w-full'>
          <input
            className='w-full bg-gray-400 py-4 rounded-md text-gray-100 placeholder:text-gray-300 pl-4 outline-none focus:ring-2 ring-blue-300'
            name='title'
            placeholder='Digite a tarefa'
            type="text"
            onChange={handleNewTaskChange}
            value={newTaskTitle}
            onInvalid={handleNewTaskInvalid}
            autoComplete='off'
            required
          />
          <button
            className='flex items-center gap-1 justify-center rounded-md bg-blue-500 px-3 ml-2 text-gray-100 font-bold'
            type="submit">
            Create <PlusCircle size={24}
            />
          </button>
        </form>
        <div>
          <div className='flex w-full justify-between mt-8'>
            {
              <Counter text={'Tarefas adicionadas'} allTasks={tasks.length} />
            }
            {
              <Counter text={'Concluídas'} counter={couterTasksDone} allTasks={tasks.length} />
            }
          </div>
          <ul className=''>
            {
              tasks.length > 0
                ? (
                  tasks.map(item =>
                    <Task key={item.id}
                      id={item.id}
                      title={item.title}
                      done={item.done}
                      onTaskDone={handleToggleTaskDone}
                      onTaskDelete={handleRemoveTask}
                    />
                  )
                )
                : (
                  <div className='flex flex-col gap-4 items-center mt-16 text-center text-gray-300'>
                    <ClipboardText size={56} />
                    <div>
                      <p className='font-bold'>Você ainda não tem tarefas cadastradas</p>
                      <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                  </div>
                )
            }
          </ul>
        </div>
      </main>
    </div>

  )
}
