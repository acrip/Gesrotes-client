import { enqueueSnackbar } from "notistack";
import { getScenery, postEtiqueta } from "../../api/gesrotesAPI";
import { useQuery } from "react-query";
import { useState } from "react";

function CreateTag() {
  const { data: escenarios } = useQuery({
    queryKey: ["escenarios"],
    queryFn: getScenery,
  });

  const { refetch } = useQuery({
    queryKey: ["etiquetas"],
    refetchOnMount: false,
  });

  const [nameTag, setNameTagValue] = useState("");
  const [escenarioId, setEscenarioId] = useState("");

  const handleInputChange = (event) => {
    setNameTagValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setEscenarioId(event.target.value);
  };

  const handleCreateTag = () => {
    postEtiqueta({
      escenarioId,
      nameTag,
    })
      .then(() => {
        refetch();
        enqueueSnackbar({
          message: "Etiqueta eliminada con éxito",
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar({
          message: "Ha ocurrido un error al eliminar la etiqueta",
          variant: "error",
        });
      });
  };

  return (
    <div className="flex mt-5 -ml-10">
      <div className="flex-col m-10 mr-20">
        <div className="mb-4">
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute">
            1
          </span>
          <label className="font-bold text-xl -ml-6">Nombre de etiqueta</label>
        </div>
        <div className="flex">
          <label className="flex ml-10 mb-2 mr-1">
            {" "}
            Nombre de la etiqueta del hospital
          </label>
          <span className="text-red-500"> *</span>
        </div>
        <input
          type="text"
          placeholder="Ingrese un nombre"
          value={nameTag}
          onChange={handleInputChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        />
      </div>
      <div className="border-l-2 border-gray-400 mt-5 mb-10"></div>
      <div className="flex-col m-10 mr-20">
        <div className="mb-4">
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute">
            2
          </span>
          <label className="font-bold text-xl ml-10">
            Selección del escenario
          </label>
        </div>
        <div className="flex">
          <label className="flex ml-10 mb-2 mr-1">
            {" "}
            Seleccione el hospital
          </label>
          <span className="text-red-500"> *</span>
        </div>
        <select
          value={escenarioId}
          onChange={handleDropdownChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        >
          <option value="">Seleccione el escenario</option>
          {escenarios?.map((escenario) => (
            <option key={escenario.id} value={escenario.id}>
              {escenario.name}
            </option>
          ))}
        </select>
        <div className="mt-5">
          <button
            className="bg-blue ml-52 h-10 w-1/3 text-white rounded-lg font-bold"
            onClick={handleCreateTag}
          >
            CREAR
          </button>
        </div>
      </div>
    </div>
  );
}

export { CreateTag };
