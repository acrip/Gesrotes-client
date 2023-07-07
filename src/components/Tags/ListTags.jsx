import { api } from "../../api/gesrotesAPI";
import { enqueueSnackbar } from "notistack";
import { FiTrash } from "react-icons/fi";
import { getEtiquetas } from "../../api/gesrotesAPI";
import { useConfirm } from "material-ui-confirm";
import { useQuery } from "react-query";

function ListTags() {
  const confirm = useConfirm();

  const { data: tags, refetch } = useQuery({
    queryKey: ["etiquetas"],
    queryFn: getEtiquetas,
  });

  const handleDelete = (tagId) => {
    confirm({
      title: "Estas seguro?",
      description: "Va a eliminar una etiqueta",
    })
      .then(() => {
        api
          .deleteTag(tagId)
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
      })
      .catch(() => {});
  };

  return (
    <div className="flex flex-col justify-center w-full mr-52 ml-56">
      <h2 className="text-blue font-bold mb-4 -mt-8">LISTA DE ETIQUETAS</h2>
      <div className="max-h-32 overflow-y-auto">
        <table className="w-full bg-white border-b-2">
          <thead>
            <tr>
              <th className="py-2 font-semibold text-center border-b border-gray-400">
                Etiqueta
              </th>
              <th className="py-2 font-semibold text-center border-b border-gray-400">
                Hospital
              </th>
              <th className="py-2 font-semibold text-center border-b border-gray-400">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {tags?.map((tag) => (
              <tr key={tag.id}>
                <td className="py-2 border-b border-gray-400 w-1/3">
                  {tag.name}
                </td>
                <td className="py-2 border-b border-gray-400 w-1/3">
                  {tag.nameScenery}
                </td>
                <td className="py-2 border-b border-gray-400 w-1/3">
                  <div className="flex">
                    <div className="flex w-1/2 -ml-2"></div>
                    <div>
                      <FiTrash
                        onClick={() => handleDelete(tag.id)}
                        color="red"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ListTags };
