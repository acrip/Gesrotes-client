import {ProfileCard} from './ProfileCard'

function Calendar() {
  // Ejemplo de datos de estudiantes
  const students = [
    { id: 1, name: 'Estudiante 1' },
    { id: 2, name: 'Estudiante 2' },
    { id: 3, name: 'Estudiante 3' },
    { id: 4, name: 'Estudiante 4' },
  ];

  // Obtener los nombres de los días de la semana
  const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDay);
  
  const currentDaysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + index - 1);
    return date.getDate();
  });
  return (
    <div className="flex-col p-4 mr-5 border rounded-2xl max-h-[73vh] overflow-y-auto">
      <div className="flex h-20 sticky">
        <div className='text-center p3 m-5'>Estudiante / Fecha</div>

      {currentDaysOfWeek.map((day, index) => (
        <div key={index} className="flex-1 flex items-center justify-center flex-col border rounded-2xl">
          <div>{daysOfWeek[index]}</div>
          <div className='w-20 h-20 text-blue text-3xl font-bold text-center rounded-full'>{day}</div>
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
              <div key={index} className="flex-1 flex items-center justify-center flex-col border rounded-2xl shadow-sky-600 shadow-sm">
                <div className='flex'></div>
                <div className='bg-gray-soft w-20 h-20 text-white text-7xl font-bold text-center  rounded-full'>+</div>
                <div>Sin asignar</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export { Calendar };