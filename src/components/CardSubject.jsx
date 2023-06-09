import { Link } from "react-router-dom";
import { useContext } from 'react'
import { SubjectContext } from '../Context'

function CardSubject({data}) {
  const context = useContext(SubjectContext)
  return (
    <div className='bg-white text-white p-2 shadow-lg shadow-blue border rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 '>
      <div className='h-60'>
        <div className='bg-blue text-center rounded-xl'>
          <h1 className='text-xl font-bold capitalize whitespace-nowrap p-2'>{data.name}</h1>
          <p className='text-sm pb-2 pt-1 whitespace-nowrap'>{data.name}</p>
        </div >
        <div className='grid grid-cols-2 gap-2 mt-24'>
          <button
            className='bg-green-dark px-2 py-1 rounded-md mt-4 hover:bg-green-light whitespace-nowrap'
            onClick={() => context.setCurrentData(data)}
          >
            <Link to={`/asignaturas/${data.id}`}>Estado de la asignatura</Link>
          </button>
          <button
            className='bg-green-dark px-2 py-1 rounded-md mt-4 hover:bg-green-light whitespace-nowrap'
          >
            <Link to={`/asignaturas/${data.id}/estudiantes`}>Gestionar asignatura</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export { CardSubject }