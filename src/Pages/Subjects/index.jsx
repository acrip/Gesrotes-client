import { CardSubject } from '../../components/CardSubject'
import { Outlet } from 'react-router-dom'
import { Layout } from '../../components/Layout/index'
import { useState, useEffect } from 'react';
import { ModalSubjectDetail } from '../../components/SubjectDetail';

function Subjects() {
{/*  const { subjects } = useContext(SubjectContext)*/}
  const [placeholder, setPlaceholder] = useState('Ingrese el nombre de la asignatura');

{/*  if (subjects.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay materias registradas</h1>
  }*/}

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      <div className='bg-white-soft mt-5 rounded-xl border mr-5 h-full mb-20'>
        <div className="flex justify-center mt-8 mb-8">
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder={placeholder}
                className="text-lg font-bold pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a6 6 0 017.54 9.32l4.88 4.88a1 1 0 01-1.42 1.42l-4.88-4.88A6 6 0 018 2zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 m-5 gap-5'>
          {items?.map((item) => (
            <CardSubject key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export { Subjects }