import React, { useState } from 'react';
import { TabEstudiantes } from './TabEstudiantes';
import { TabDocentes } from './TabDocentes';
import { TabRotes } from './TabRotes';
import { TabTurnos } from './TabTurnos';
import { TabDocumentos } from './TabDocumentos';
import { useLocation } from 'react-router-dom';


function TabMain({value}) {
  const location = useLocation()
  const pathname = location.pathname
  const isActivePath = pathname.split('/')[3]

  const tabs = [
    { label: 'Estudiantes', content: <TabEstudiantes /> },
    { label: 'Profesores', content: <TabDocentes /> },
    { label: 'Rotes', content: <TabRotes /> },
    { label: 'Turnos', content: <TabTurnos /> },
    { label: 'Documentos', content: <TabDocumentos /> },
  ];

  const items  = {
    estudiantes: 0,
    profesores: 1,
    rotes: 2,
    turnos: 3,
    documentos: 4
  }

  const [activeTab, setActiveTab] = useState(items[isActivePath]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='mr-5'>
      <div className="flex mt-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium w-80 ${index === activeTab ? 'bg-blue text-white rounded-t-xl ' : 'bg-white rounded-b-xl text-gray-700'
              }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className=" bg-white-soft">{tabs[activeTab].content}</div>
    </div>
  );
};
export { TabMain }