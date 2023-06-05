import React, { useState } from 'react';

function Dropdowns() {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  return (
    <div className="flex mb-4">
      <div className="mr-2 flex-1">
        <label className="block left-8 relative mb-2">
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute -left-8">1</span>
          Nombre de la etiqueta
          <span className="text-red-500">*</span>
        </label>
        <input 
        type="text" 
        value={dropdown1Value}
        onChange={handleDropdown1Change}
        className="border border-gray-300 rounded-full p-2 w-full"/>

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
  )
}

export { Dropdowns }