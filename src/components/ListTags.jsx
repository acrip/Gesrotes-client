import React from 'react'

function ListTags() {

  const tags = [
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
    { id: 1, name: 'Primer piso', hosp: 'Susana Lopez' },
  ];
  return (
    <div className="flex flex-col justify-center w-full mr-52 ml-56">
      <h2 className='text-blue font-bold mb-4 -mt-8'>LISTA DE ETIQUETAS ASOCIADAS</h2>
      <div className="max-h-32 overflow-y-auto">
      <table className="w-full bg-white border-b-2">
        <thead>
        <tr>
          <th className="py-2 font-semibold text-center border-b border-gray-400">Etiqueta</th>
          <th className="py-2 font-semibold text-center border-b border-gray-400">Hospital</th>
          <th className="py-2 font-semibold text-center border-b border-gray-400">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {tags.map((tag) => (
          <tr key={tag.id}>
            <td className="py-2 border-b border-gray-400 w-1/3">{tag.name}</td>
            <td className="py-2 border-b border-gray-400 w-1/3">{tag.hosp}</td>
            <td className="py-2 border-b border-gray-400 w-1/3">Eliminar</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  )
}

export { ListTags }