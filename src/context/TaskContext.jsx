import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const nextId = tasks.reduce((maxId, task) => {
    return task.id > maxId ? task.id : maxId;
  }, 0) + 1;

  function createTask(task) {
    setTasks([...tasks, {
      id: nextId,
      title: task.title,
      description: task.description

    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data)
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}