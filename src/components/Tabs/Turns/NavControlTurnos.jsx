import { Link, useParams } from 'react-router-dom';

function NavControlTurnos() {
  const { id } = useParams()

  return (
    <div className="flex p-4 mr-5 items-center gap-3">
      <button className="border border-gray-500 rounded-lg bg-blue text-white px-4 py-2">Gestión Estudiantes</button>
      <button className="border border-gray-500 rounded-lg  bg-blue text-white px-4 py-2">

        <Link to={`/asignaturas/${id}/turnos/gestion-etiquetas`}>Gestión Etiquetas</Link>
      </button>
      <button className="border border-gray-500 rounded-lg  bg-blue text-white px-4 py-2">Alimentación</button>
      <div className="relative rounded-full bg-white flex items-center pl-3 h-10 ">
        <input
          className="w-full bg-transparent rounded-full text-xl focus:outline-none pr-10 h-10"
          type="text"
          placeholder="Buscar Estudiantes"
        />
        <svg
          className="h-5 w-5 text-gray-500 absolute right-3 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      <select className="border-b-2 border-gray-500 rounded-none px-4 py-2">
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select className="border-b-2 border-gray-500 rounded-none px-4 py-2">
        <option value="Enero">Julio</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>
      <button className="border border-gray-500 rounded-lg px-4 py-2">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="border border-gray-500 rounded-lg px-4 py-2">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <button className="border border-gray-500 rounded-lg bg-blue text-white px-4 py-2">Validar Turnos</button>
    </div>
  );
};

export { NavControlTurnos }