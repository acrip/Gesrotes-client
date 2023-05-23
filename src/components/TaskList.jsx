import { TaskCard } from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
    }

    return (
        <div>
            <div className='h-40 text-center text-green-dark bg-yellow pt-20'>header</div>
            <div className='grid grid-cols-3 m-2 gap-2'>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}

export { TaskList }