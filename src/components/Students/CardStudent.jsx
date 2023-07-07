import { enqueueSnackbar } from "notistack";
import { PostEstudianteAsignatura } from "../../api/gesrotesAPI";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

function CardStudent({ data }) {
  const location = useLocation();
  const pathname = location.pathname;
  const subjectId = pathname.split("/")[2];

  const { refetch } = useQuery({
    queryKey: ["etiquetas"],
    refetchOnMount: false,
  });

  const handlePostStudent = () => {
    PostEstudianteAsignatura({
      subjectId,
      studentId: data.idStudent,
    })
      .then(() => {
        refetch();
        enqueueSnackbar({
          message: "Estudiante agregado",
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar({
          message: "Ha ocurrido un error al agregar estudiante",
          variant: "error",
        });
      });
  };
  return (
    <div className="flex flex-row justify-between w-full m-2 rounded-full border bg-white-soft">
      <img 
      className="rounded-full w-12 h-12 m-2"
      src="https://randomuser.me/api/portraits/men/14.jpg"  />
      <div className="flex font-bold text-xl w-full m-3">{data.name}</div>
      <button
        className="bg-blue rounded-full justify-end text-right text-white m-2 p-2"
        onClick={handlePostStudent}
      >
        Registrar
      </button>
    </div>
  );
}

export { CardStudent };
