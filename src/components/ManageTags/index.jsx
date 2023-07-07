import { useState } from "react";
import { CreateTag } from "../Tags/CreateTag";
import { ListTags } from "../Tags/ListTags";
import { AssociateTag } from "../Tags/AssociateTag";
import { useNavigate } from "react-router-dom";

function ModalManageTags() {
  const [isCreateClicked, setCreateClicked] = useState(true);
  const navigate = useNavigate();

  const handleCreateClick = () => {
    setCreateClicked(true);
  };

  const handleAssociateClick = () => {
    setCreateClicked(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="flex-col bg-white text-center w-2/3 h-2/3 border-blue overflow-auto">
        <div className="flex justify-center">
          <span className="w-1/12 bg-blue"></span>
          <h2 className="w-10/12 text-xl font-bold bg-blue text-white p-2">
            GESTIONAR ETIQUETAS
          </h2>
          <span
            className="w-1/12 text-white bg-blue text-center font-bold items-center pl-12 text-4xl cursor-pointer"
            onClick={handleGoBack}
          >
            x
          </span>
        </div>
        <div className="flex justify-center p-5 gap-1">
          <button
            onClick={handleCreateClick}
            className={`w-1/4 h-10 ${
              isCreateClicked ? "bg-blood text-white" : "bg-white"
            }
             hover:bg-blood hover:text-white text-blue font-bold py-2 px-4 rounded-l-full`}
          >
            CREAR ETIQUETAS
          </button>
          <button
            onClick={handleAssociateClick}
            className={`w-1/4 h-10 ${
              !isCreateClicked ? "bg-blood text-white" : "bg-white"
            }
             hover:bg-blood hover:text-white text-blue font-bold py-2 px-4 rounded-r-full`}
          >
            ASOCIAR ETIQUETAS
          </button>
        </div>
        <span className="block border-t-2 border-gray-400 mr-10 ml-10"></span>
        <div className="h-1/3 m-5 flex items-center justify-center">
          {isCreateClicked ? <CreateTag /> : <AssociateTag />}
        </div>
        <span className="block border-t-2 border-gray-400 mr-10 ml-10"></span>
        <div className="h-1/3 m-5 flex items-center justify-center">
          <ListTags />
        </div>
      </div>
    </div>
  );
}

export { ModalManageTags };
