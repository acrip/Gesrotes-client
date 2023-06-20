import { useQuery } from 'react-query'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { getAsignaturaById } from "../../api/gesrotesAPI";

function ModalSubjectDetail() {
  
  const {isLoading, data: subject, isError, error} = useQuery({
    queryKey: ['asignatura'],
    queryFn: () => getAsignaturaById(id)
  })

  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white text-center w-2/3 h-2/3 border-blue">
        <h2 className="text-xl font-bold bg-blue text-white p-2">ESTADO DE LA ASIGNATURA</h2>
        <p className="text-md text-blue font-bold uppercase m-10">{subject?.name}</p>
        <div className="h-2/4 flex justify-between mr-12 ml-12 gap-7">
          <div className="w-1/5 flex flex-col items-center rounded-2xl bg-blue text-white p-3">
            <img src="https://via.placeholder.com/40" alt="Logo" className="w-1/2 h-4/2 mb-2 mt-8 rounded-full" />
            <label className='text-xs m-3 font-bold'>ESTUDIANTES</label>
            <label>24 estudiantes registrados</label>
            <button
              className="bg-green-dark text-white text-sm mt-5 px-4 py-2 w-2/3 h-auto rounded-full"
            >
              <Link to={`/asignaturas/${subject?.id}/estudiantes`}>COMPLETO</Link>
            </button>
          </div>
          <div className=" w-1/5 flex flex-col items-center rounded-2xl bg-blue text-white p-3">
            <img src="https://via.placeholder.com/40" alt="Logo" className="w-1/2 h-4/2 mb-2 mt-8 rounded-full" />
            <label className='text-xs m-3 font-bold'>PROFESORES</label>
            <label>Faltan 2 profesores por registrar horario</label>
            <button
              className="bg-yellow text-white text-sm  px-4 py-2 w-2/3 h-auto rounded-full"
            >
              <Link to={`/asignaturas/${subject?.id}/profesores`}>VERIFICAR</Link>
            </button>
          </div>
          <div className="w-1/5 flex flex-col items-center rounded-2xl bg-blue text-white p-3">
            <img src="https://via.placeholder.com/40" alt="Logo" className="w-1/2 h-4/2 mb-2 mt-8 rounded-full" />
            <label className='text-xs m-3 font-bold'>ROTES</label>
            <label>Sin registros</label>
            <button
              className="bg-blood text-white text-sm mt-5 px-4 py-2 w-2/3 h-auto rounded-full"
            >
              <Link to={`/asignaturas/${subject?.id}/rotes`}>AGREGAR</Link>
            </button>
          </div>
          <div className="w-1/5 flex flex-col items-center rounded-2xl bg-blue text-white p-3">
            <img src="https://via.placeholder.com/40" alt="Logo" className="w-1/2 h-4/2 mb-2 mt-8 rounded-full" />
            <label className='text-xs m-3 font-bold'>TURNOS</label>
            <label>30 turnos registrados</label>
            <button
              className="bg-green-dark text-white text-sm mt-5 px-4 py-2 w-2/3 h-auto rounded-full"
              >
              <Link to={`/asignaturas/${subject?.id}/turnos`}>COMPLETO</Link>
            </button>
          </div>
          <div className="w-1/5 flex flex-col items-center rounded-2xl bg-blue text-white p-3">
            <img src="https://via.placeholder.com/40" alt="Logo" className="w-1/2 h-4/2 mb-2 mt-8 rounded-full" />
            <label className='text-xs m-3 font-bold'>DOCUMENTOS</label>
            <label>2 documentos expirados</label>
            <button
              className="bg-yellow text-white text-sm mt-5 px-4 py-2 w-2/3 h-auto rounded-full"
            >
              <Link to={`/asignaturas/${subject?.id}/documentos`}>VERIFICAR</Link>
            </button>
          </div>
        </div>
        <div className="h-auto p-10">
          <button
            className="bg-blue text-white font-bold text-md px-10 py-3 rounded-xl"
            onClick={() => navigate(-1)}
          >
            CERRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalSubjectDetail };