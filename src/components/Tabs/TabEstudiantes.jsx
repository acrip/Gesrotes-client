import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getEstudiantes, getEstudiantesAsignados } from "../../api/gesrotesAPI";
import { useQuery } from "react-query";
import { CardStudent } from "../Students/CardStudent";
import { CardStudentDetail } from "../Students/CardStudentDetail";

const TabEstudiantes = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const idSubject = pathname.split("/")[2];

  const [searchTerm, setSearchTerm] = useState("");

  const { data: student } = useQuery({
    queryKey: ["Estudiantes", searchTerm],
    queryFn: () =>
      getEstudiantes({
        search: searchTerm,
        subjectId: idSubject,
      }),
  });

  const { data: studentAval } = useQuery({
    queryKey: ["EstudiantesAsignados"],
    queryFn: () =>
      getEstudiantesAsignados({
        search: "",
        subjectId: idSubject,
      }),
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex-row bg-white-soft p-4">
        <div className="text-xl text-center font-bold mb-4">
          Buscar estudiante
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded-full py-2 px-3 mb-4 w-full"
          placeholder="Buscar estudiantes"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="flex">
          <ul className="w-full items-center justify-end">
            {student?.map((item) => (
              <CardStudent key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="border-l border-gray-200 h-full mt-5 mb-5"></div>

      <div className="flex-grow bg-white-soft p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Estudiantes seleccionados
        </h2>
        <div className="grid grid-cols-4 m-5 gap-5">
          {studentAval?.map((item) => (
            <CardStudentDetail key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { TabEstudiantes };
