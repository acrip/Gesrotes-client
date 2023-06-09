import React, { useState } from 'react'

function AssociateTag() {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };
  return (
    <div className="flex mt-5 -ml-10">
      <div className="flex-col m-10 mr-20">
        <div className='mb-4'>
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute">1</span>
          <label className="font-bold text-xl -ml-6">Selección de etiqueta</label>
        </div>
        <div className='flex'>
          <label className="flex ml-10 mb-2 mr-1"> Nombre de la etiqueta del hospital</label>
          <span className="text-red-500"> *</span>
        </div>
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        >
          <option value="">Etiqueta</option>
          <option value="Option A">Option A</option>
          <option value="Option B">Option B</option>
          <option value="Option C">Option C</option>
        </select>
      </div>

      <div className='border-l-2 border-gray-400 mt-5 mb-10'></div>

      <div className="flex-col m-10 mr-20">
        <div className='mb-4'>
          <span className="bg-blue text-white rounded-full w-6 h-6 flex items-center justify-center absolute">2</span>
          <label className="font-bold text-xl ml-10">Selección del servicio</label>
        </div>
        <div className='flex'>
          <label className="flex ml-10 mb-2 mr-1"> Servicio del hospital</label>
          <span className="text-red-500"> *</span>
        </div>
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="ml-9 border border-gray-300 rounded-full p-2 w-full"
        >
          <option value="">Servicio</option>
          <option value="Option A">Option A</option>
          <option value="Option B">Option B</option>
          <option value="Option C">Option C</option>
        </select>

        <div className='mt-5'>
          <button className='bg-blue ml-52 h-10 w-1/3 text-white rounded-lg font-bold'>
            ASOCIA
          </button>
        </div>
      </div>
    </div>
  )
}

export { AssociateTag }