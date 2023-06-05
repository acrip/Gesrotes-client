import React, { useState, useContext } from 'react';
import {Dropdowns} from './Dropdowns';
import { TaskContext } from '../context/TaskContext'

function ModalManageTags() {  
  const [selectedItems, setSelectedItems] = useState([]);
  const [clicked, setClicked] = useState(true);
  const { dropdown1Value } = useContext(TaskContext)
  const { dropdown2Value } = useContext(TaskContext)


  const handleAccept = () => {
    setSelectedItems([...selectedItems, `${dropdown1Value} - ${dropdown2Value}`]);
    setDropdown1Value('');
    setDropdown2Value('');
  };

  const handleClose = () => {
    // Aquí puedes agregar la lógica para cerrar el modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white-strong rounded-lg p-8 w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center bg-blue text-white">GESTIONAR ETIQUETAS</h2>
        <button
          onClick={handleClose}
          className=" top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M13.414 12l4.293 4.293-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414L9.586 12 5.293 7.707l1.414-1.414L12 10.586l4.293-4.293 1.414 1.414L13.414 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex justify-center pl-5 mb-4 gap-2">
          <button  onClick={() => setClicked(true)} className="bg-blue hover:bg-blood text-white font-bold py-2 px-4 rounded-l-full">
            CREAR ETIQUETAS
          </button>
          <button onClick={() => setClicked(false)} className="bg-blue hover:bg-blood text-white font-bold py-2 px-4 rounded-r-full">
            ASOCIAR ETIQUETAS
          </button>
        </div>
        <hr className="border-slate-400 mb-4" />
        {clicked ? <Dropdowns /> : <div>2</div>}
        

        <div className="flex justify-end">
          <button
            onClick={handleAccept}
            className="bg-blue hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-xl mb-4 align"
          >
            CREAR
          </button>
        </div>

        <h3 className="text-lg font-bold text-center">LISTA DE ETIQUETAS CREADAS</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ModalManageTags };