import { Link } from "react-router-dom";

function CardSubject({ data }) {
  return (
    <div className="bg-white text-white p-2 shadow-lg shadow-blue border rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ">
      <div className="h-52">
        <div className="bg-blue text-center rounded-t-xl">
          <h1 className="text-xl font-bold capitalize whitespace-nowrap p-2">
            {data.name}
          </h1>
          <p className="text-sm pb-2 pt-1 whitespace-nowrap">
            {data.carreraName}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-20">
          <button className="bg-green-dark px-2 py-1 rounded-xl mt-4 hover:bg-green-light whitespace-nowrap">
            <Link className="font-bold" to={`/asignaturas/${data.id}`}>
              ESTADO DE LA ASIGNATURA
            </Link>
          </button>
          <button className="bg-green-dark px-2 py-1 rounded-xl mt-4 hover:bg-green-light whitespace-nowrap">
            <Link
              className="font-bold"
              to={`/asignaturas/${data.id}/estudiantes`}
            >
              GESTIONAR ASIGNATURA
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export { CardSubject };
