import { getEtiquetas, getServicios, postAsociateTag } from "../../api/gesrotesAPI";
import { useQuery } from "react-query";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

function AssociateTag() {
  const { data: tags } = useQuery({
    queryKey: ["etiquetas"],
    queryFn: getEtiquetas,
  });
  const { data: services } = useQuery({
    queryKey: ["servicios"],
    queryFn: getServicios,
  });

  const [dropdownTagValue, setDropdownTagValue] = useState("");
  const [dropdownServiceValue, setDropdownServiceValue] = useState("");

  const handleDropdownTagChange = (event) => {
    setDropdownTagValue(event.target.value);
  };
  const handleDropdownServiceChange = (event) => {
    setDropdownServiceValue(event.target.value);
  };

  const handleAssociateTag = () => {
    postAsociateTag({
      idService: dropdownServiceValue,
      idTag: dropdownTagValue,
    })
      .then(() => {
        //refetch();
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
          <label className="font-bold text-xl -ml-6">
            Selección de etiqueta
          </label>
        </div>
        <div className="flex">
          <label className="flex ml-10 mb-2 mr-1">
            {" "}
            Nombre de la etiqueta del hospital
          </label>
          <span className="text-red-500"> *</span>
        </div>
        <select
          value={dropdownTagValue}
          onChange={handleDropdownTagChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        >
          <option value="">Seleccione la etiqueta</option>
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name} - {tag.nameScenery}
            </option>
          ))}
        </select>
      </div>

      <div className="border-l-2 border-gray-400 mt-5 mb-10"></div>

      <div className="flex-col m-10 mr-20">
        <div className="mb-4">
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute">
            2
          </span>
          <label className="font-bold text-xl ml-10">
            Selección del servicio
          </label>
        </div>
        <div className="flex">
          <label className="flex ml-10 mb-2 mr-1"> Servicio del hospital</label>
          <span className="text-red-500"> *</span>
        </div>
        <select
          value={dropdownServiceValue}
          onChange={handleDropdownServiceChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        >
          {services?.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        <div className="mt-5">
          <button
            className="bg-blue ml-52 h-10 w-1/3 text-white rounded-lg font-bold"
            onClick={handleAssociateTag}
          >
            ASOCIAR
          </button>
        </div>
      </div>
    </div>
  );
}

export { AssociateTag };
