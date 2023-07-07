import { useLocation } from "react-router-dom";
import { api } from "../../api/gesrotesAPI";
import { enqueueSnackbar } from "notistack";

function CardStudentDetail({data}) {

  const location = useLocation();
  const pathname = location.pathname;
  const idSubject = pathname.split("/")[2];

  const handleDelete = (idStudent) => {
    confirm({
      title: "Estas seguro?",
      description: "Va a eliminar un estudiante registrado",
    })
      .then(() => {
        api
          .deleteEstudianteAsignado({
            subjectId: idSubject,
            studentId: idStudent, 
          }
            )
          .then(() => {
            enqueueSnackbar({
              message: "Estudiante eliminado con éxito",
              variant: "success",
            });
          })
          .catch(() => {
            enqueueSnackbar({
              message: "Ha ocurrido un error al eliminar el estudiante",
              variant: "error",
            });
          });
      })
      .catch(() => {});
  };

  return (
    <div className="bg-white text-black p-2 shadow-lg shadow-blue border rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ">
      <div className="h-24">
        <div className="text-center rounded-t-xl">
          <h1 className="text-xl font-bold capitalize whitespace-nowrap p-2">
            {data.name}
          </h1>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <button 
          className="bg-blood text-white text-center flex justify-center px-2 py-1 rounded-xl mt-4 hover:bg-red-700 whitespace-nowrap"
          onClick={() => handleDelete(data.idStudent)}
          >
              Eliminar registro
          </button>
        </div>
      </div>
    </div>
  );
}

export { CardStudentDetail };
