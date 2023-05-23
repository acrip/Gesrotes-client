import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='bg-white text-white p-2 shadow-md border border-gray-300 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105'>
      <div>
        <div className='bg-blue text-center rounded-xl'>
          <h1 className='text-xl font-bold capitalize whitespace-nowrap p-2'>{task.title}</h1>
          <p className='text-sm pb-2 pt-1 whitespace-nowrap'>{task.description}</p>
        </div >
        <div className='grid grid-cols-2 gap-2'>
          <button
            className='bg-green-dark px-2 py-1 rounded-md mt-4 hover:bg-green-light whitespace-nowrap'
          >
            Estado de la asignatura
          </button>
          <button
            className='bg-green-dark px-2 py-1 rounded-md mt-4 hover:bg-green-light whitespace-nowrap'
            onClick={() => deleteTask(task.id)}
          >
            Gestionar asignatura
          </button>
        </div>
      </div>
    </div>
  )
}

export { TaskCard }