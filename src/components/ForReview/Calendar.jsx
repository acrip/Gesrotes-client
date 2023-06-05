import React from 'react';
import {ProfileCard} from './ProfileCard'

function Calendar() {
  // Ejemplo de datos de estudiantes
  const students = [
    { id: 1, name: 'Estudiante 1' },
    { id: 2, name: 'Estudiante 2' },
    { id: 3, name: 'Estudiante 3' },
    { id: 4, name: 'Estudiante 4' },
    { id: 5, name: 'Estudiante 5' },
  ];

  // Obtener los nombres de los días de la semana
  const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

  return (
    <div className="flex-col p-4 mr-5 border rounded-xl ">
      <div className="flex h-20">
        <div className='text-center p3 m-5'>Estudiante / Fecha</div>
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex-1 flex items-center justify-center flex-col border rounded-2xl">
            <div>{day}</div>
            <div className=' w-20 h-20 text-blue text-3xl font-bold text-center  rounded-full'>{index + 1}</div>
          </div>
        ))}
      </div>
      <div className='h-1 border m-5 bg-gray-soft '></div>
        {students.map((student) => (
          <div key={student.id} className="flex h-40 ">
            <div className='text-center ml-5 mr-5 mt-auto mb-auto justify-center'>
              <ProfileCard />
            </div>
            {daysOfWeek.map((_, index) => (
              <div key={index} className="flex-1 flex items-center justify-center flex-col border rounded-2xl shadow-purple-800 shadow-lg">
                <div className='flex'></div>
                <div className='bg-gray-soft w-20 h-20 text-white text-7xl font-bold text-center  rounded-full'>+</div>
                <div>Sin asignar</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export { Calendar };