import React, { useState } from 'react';

function ModalCreateTag() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

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
      <div className="bg-white-soft rounded-lg p-8 w-1/2">
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
          <button className="bg-blue hover:bg-blood text-white font-bold py-2 px-4 rounded-l-full">
            CREAR ETIQUETAS
          </button>
          <button className="bg-blue hover:bg-blood text-white font-bold py-2 px-4 rounded-r-full">
            ASOCIAR ETIQUETAS
          </button>
        </div>
        <hr className="border-slate-400 mb-4" />
        <div className="flex mb-4">
          <div className="mr-2 flex-1">
            <label className="block left-8 relative mb-2">
            <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute -left-8">1</span>
              Nombre de la etiqueta
              <span className="text-red-500">*</span>
            </label>
            <select
              value={dropdown1Value}
              onChange={handleDropdown1Change}
              className="border border-gray-300 rounded-full p-2 w-full"
            >
              <option value="">Nombre de la etiqueta del hospital</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="ml-2 flex-1 border-l border-slate-400 pl-4">
            <label className="block left-8 relative mb-2">
            <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute -left-8">2</span>
              Selección del escenario
              <span className="text-red-500">*</span>
            </label>
            <select
              value={dropdown2Value}
              onChange={handleDropdown2Change}
              className="border border-gray-300 rounded-full p-2 w-full"
            >
              <option value="">Seleccione el escenario</option>
              <option value="Option A">Option A</option>
              <option value="Option B">Option B</option>
              <option value="Option C">Option C</option>
            </select>
          </div>
        </div>
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

export { ModalCreateTag };